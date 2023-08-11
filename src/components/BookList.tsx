import BookCard from './BookCard';

import { Library } from '../interfaces';

import styles from '../styles/BookList/Booklist.module.css';

interface Props {
	bookList: Library[]
}

const BookList: React.FC<Props> = ({bookList}) => {

	return (
		<div className={styles.bookListContainer}>
			{bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> ))}
		</div>
	);
};

export default BookList;