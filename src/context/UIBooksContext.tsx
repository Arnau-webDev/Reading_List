import { createContext } from 'react';
import { Library } from '../interfaces';

interface ContextProps {
	bookList: Library[],
	readingList: Library[],
	setAllBooks: (books: Library[]) => void
}

export const UIBooksContext = createContext({} as ContextProps);