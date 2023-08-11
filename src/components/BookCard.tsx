import { Book } from '../interfaces';

import styles from '../styles/BookCard/Bookcard.module.css';

interface Props {
    book: Book
}

const BookCard: React.FC<Props> = ({book}) => {
	return (
		<>
			<div key={book.ISBN} className={styles.bookCard}>
				<img src={book.cover} alt={`${book.title} cover`} />
			</div>
		</>
	);
};

export default BookCard;