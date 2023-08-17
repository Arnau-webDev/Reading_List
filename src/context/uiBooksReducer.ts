import { ALL_GENRES } from '../constants';
import { Library, Book } from '../interfaces';
import { UIBooksState } from './UIBooksProvider';

type UIBooksActionType = 
| { type: 'UI - Set Books', payload: Library[] }
| { type: 'UI - Add Book To Reading List', payload: Book }
| { type: 'UI - Remove Book From Reading List', payload: Book }
| { type: 'UI - Set Book Genres', payload: string[] }
| { type: 'UI - Filter By Genre', payload: string }
| { type: 'UI - Filter By Number Of Pages', payload: number }
| { type: 'UI - Clear Reading List' }

export const uiBooksReducer = ( state: UIBooksState, action: UIBooksActionType): UIBooksState => {

	switch (action.type) {
	case 'UI - Set Books':
		return {
			...state,
			initialBookList: action.payload,
			bookList: action.payload,
		};
	case 'UI - Set Book Genres':
		return {
			...state,
			bookGenres: action.payload,
		};
	case 'UI - Add Book To Reading List':
		return {
			...state,
			readingList: [...state.readingList, {book: action.payload}],
		};
	case 'UI - Filter By Genre':
		return {
			...state,
			bookList: state.initialBookList.filter(({book}) => {
				if(action.payload === ALL_GENRES) return { book };
				if (book.genre === action.payload) return { book };
			})
		};
	case 'UI - Filter By Number Of Pages':
		return {
			...state,
			bookList: state.initialBookList.filter(({book}) => (book.pages <= action.payload)).sort((a,b) => a.book.pages - b.book.pages),
		};
	case 'UI - Clear Reading List': 
		return {
			...state,
			readingList: [],
		};
	case 'UI - Remove Book From Reading List':
		return {
			...state,
			readingList: state.readingList.filter(({book}) => book.ISBN !== action.payload.ISBN),
		};
	default:
		return state;
	}

};