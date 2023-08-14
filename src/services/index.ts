import { books as bookResults } from '../data/books';
import { BookListResponse } from '../interfaces';

export const getBooksService = async (): Promise<BookListResponse> => {
	// Fake promise to simulate fetching the books from an endpoint
	console.log(bookResults.library);
	return Promise.resolve(bookResults);
};

export const getBookGenresService = async (): Promise<BookListResponse> => {
	return Promise.resolve(bookResults);
};