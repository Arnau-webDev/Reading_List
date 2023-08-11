import { PropsWithChildren, useReducer } from 'react';
import { UIBooksContext } from './UIBooksContext';
import { uiBooksReducer } from './uiBooksReducer';
import { Library, Book } from '../interfaces';

export interface UIBooksState {
    bookList: Library[];
    readingList: Library[];
}

const UI_BOOKS_INITIAL_STATE: UIBooksState = {
	bookList: [],
	readingList: [],
};

export const UIBooksProvider: React.FC<PropsWithChildren> = ({ children }) => {

	const [state, dispatch] = useReducer(uiBooksReducer, UI_BOOKS_INITIAL_STATE);

	const setAllBooks = (books: Library[]) => { dispatch({type: 'UI - Set Books', payload: books });};
	const addToReadingList = (book: Book) => { dispatch({type: 'UI - Add Book To Reading List', payload: book});};

	return (
		<UIBooksContext.Provider value={{
			...state,
			setAllBooks,
			addToReadingList,
		}}>
			{ children }
		</UIBooksContext.Provider>
	);
};