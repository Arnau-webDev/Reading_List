import { useContext } from 'react';
import { Book } from '../interfaces';

import styles from '../styles/BookCard/Bookcard.module.css';
import { UIBooksContext } from '../context/UIBooksContext';
import { listContainsBook } from '../utils';

interface Props {
    book: Book
}

const BookCard: React.FC<Props> = ({book}) => {
	const { readingList, addToReadingList } = useContext(UIBooksContext);

	const handleClick = () => {
		if(listContainsBook(book, readingList)) return;
		addToReadingList(book);
	};

	return (
		<>
			<div key={book.ISBN} className={styles.bookCard}>
				<img src={book.cover} alt={`${book.title} cover`} />
				<button onClick={handleClick} className={styles.cardButton}>Add to reading list</button>
			</div>
		</>
	);
};

export default BookCard;