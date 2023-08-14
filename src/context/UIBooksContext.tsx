import { createContext } from 'react';
import { Book, Library } from '../interfaces';

interface ContextProps {
	bookList: Library[],
	readingList: Library[],
	setAllBooks: (books: Library[]) => void,
	setBookGenres: (books: string[]) => void,
	addToReadingList: (book: Book) => void,
}

export const UIBooksContext = createContext({} as ContextProps);