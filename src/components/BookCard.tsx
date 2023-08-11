import { useContext } from 'react';
import { Book } from '../interfaces';

import styles from '../styles/BookCard/Bookcard.module.css';
import { UIBooksContext } from '../context/UIBooksContext';

interface Props {
    book: Book
}

const BookCard: React.FC<Props> = ({book}) => {
	const { addToReadingList } = useContext(UIBooksContext);
	const handleClick = () => {
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