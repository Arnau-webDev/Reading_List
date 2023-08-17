import { PropsWithChildren, useReducer } from 'react';
import { UIBooksContext } from './UIBooksContext';
import { uiBooksReducer } from './uiBooksReducer';
import { Library, Book } from '../interfaces';

export interface UIBooksState {
    bookList: Library[];
    initialBookList: Library[];
    readingList: Library[];
	bookGenres: string[];
}

const UI_BOOKS_INITIAL_STATE: UIBooksState = {
	bookList: [],
	initialBookList: [],
	readingList: [],
	bookGenres: [],
};

export const UIBooksProvider: React.FC<PropsWithChildren> = ({ children }) => {

	const [state, dispatch] = useReducer(uiBooksReducer, UI_BOOKS_INITIAL_STATE);

	const setAllBooks = (books: Library[]) => { dispatch({type: 'UI - Set Books', payload: books });};
	const addToReadingList = (book: Book) => { dispatch({type: 'UI - Add Book To Reading List', payload: book});};
	const clearReadingList = () => { dispatch({ type: 'UI - Clear Reading List' });};
	const setBookGenres = (books: string[]) => { dispatch({type: 'UI - Set Book Genres', payload: books});};
	const filterByGenre = (genre: string) => { dispatch({ type: 'UI - Filter By Genre', payload: genre});};
	const filterByPages = (pages: number) => { dispatch({ type: 'UI - Filter By Number Of Pages', payload: pages});};
	const removeFromReadingList = (book: Book) => { dispatch({ type: 'UI - Remove Book From Reading List', payload: book});};

	return (
		<UIBooksContext.Provider value={{
			...state,
			setAllBooks,
			addToReadingList,
			setBookGenres,
			filterByGenre,
			clearReadingList,
			filterByPages,
			removeFromReadingList,
		}}>
			{ children }
		</UIBooksContext.Provider>
	);
};