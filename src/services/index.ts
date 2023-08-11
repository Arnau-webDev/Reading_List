import { books as bookResults } from '../data/books';
import { BookListResponse } from '../interfaces';

export const getBooksService = async (): Promise<BookListResponse> => {
	// Fake promise to simulate fetching the books from an endpoint
	return Promise.resolve(bookResults);
};