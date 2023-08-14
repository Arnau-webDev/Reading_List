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
		console.log(book.genre);
	});
	console.log('bookGenres', {bookGenres});

	return bookGenres;
};