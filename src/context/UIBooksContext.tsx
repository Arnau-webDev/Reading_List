import { createContext } from 'react';
import { Book, Library } from '../interfaces';

interface ContextProps {
	bookList: Library[],
	readingList: Library[],
	setAllBooks: (books: Library[]) => void,
	addToReadingList: (book: Book) => void,
}

export const UIBooksContext = createContext({} as ContextProps);