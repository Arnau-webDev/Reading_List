import { createContext } from 'react';
import { Book, Library } from '../interfaces';

interface ContextProps {
	bookList: Library[],
	readingList: Library[],
	bookGenres: string[],
	setAllBooks: (books: Library[]) => void,
	setBookGenres: (books: string[]) => void,
	addToReadingList: (book: Book) => void,
	filterByGenre: (genre: string) => void,
	clearReadingList: () => void,
}

export const UIBooksContext = createContext({} as ContextProps);