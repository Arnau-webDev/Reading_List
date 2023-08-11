import BookCard from './BookCard';

import { Library } from '../interfaces';

import styles from '../styles/BookList/Booklist.module.css';
import { useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

interface Props {
	bookList: Library[]
}

const BookList: React.FC<Props> = ({bookList}) => {

	const context = useContext(UIBooksContext);

	console.log(context);

	return (
		<div className={styles.bookListContainer}>
			{bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> ))}
		</div>
	);
};

export default BookList;