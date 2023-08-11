import BookCard from './BookCard';

import { books } from '../data/books';
import { BookListResponse } from '../interfaces';

import styles from '../styles/BookList/Booklist.module.css';

interface Props {
	bookList: BookListResponse
}

const BookList: React.FC<Props> = ({bookList}) => {

	console.log(books);

	const { library } = bookList;

	return (
		<div className={styles.bookListContainer}>
			{library.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> ))}
		</div>
	);
};

export default BookList;