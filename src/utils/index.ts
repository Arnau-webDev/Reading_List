import { Book, Library } from '../interfaces';
import { getBookGenresService, getBooksService } from '../services';

export const getBooks = async () => {
	// Map data
	return await getBooksService();
};

export const getBookGenres = async () => {
	const bookResults = await getBookGenresService();
	const bookGenres: string[] = [];

	bookResults.library.forEach(({ book }) => {
		if(!bookGenres.includes(book.genre)) bookGenres.push(book.genre);
	});

	return bookGenres;
};

export const listContainsBook = (obj: Book, list: Library[]) =>  {
	for (let i = 0; i < list.length; i++) {
		if (list[i].book === obj) return true;
	}

	return false;
};