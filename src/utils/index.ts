import { getBooksService } from '../services';

export const getBooks = async () => {
	// Map data
	return await getBooksService();
};