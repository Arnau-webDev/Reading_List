import { Library, Book } from '../interfaces';
import { UIBooksState } from './UIBooksProvider';

type UIBooksActionType = 
| { type: 'UI - Set Books', payload: Library[] }
| { type: 'UI - Add Book To Reading List', payload: Book }
| { type: 'UI - Set Book Genres', payload: string[] }

export const uiBooksReducer = ( state: UIBooksState, action: UIBooksActionType): UIBooksState => {

	switch (action.type) {
	case 'UI - Set Books':
		return {
			...state,
			bookList: action.payload
		};
	case 'UI - Add Book To Reading List':
		return {
			...state,
			readingList: [...state.readingList, {book: action.payload}]
		};
	case 'UI - Set Book Genres':
		return {
			...state,
			bookGenres: action.payload
		};
	default:
		return state;
	}

};