import { useContext } from 'react';
import { Book } from '../interfaces';

import { UIBooksContext } from '../context/UIBooksContext';
import { listContainsBook } from '../utils';
import Info from './Icons/Info';
import AddSign from './Icons/AddSign';

import styles from '../styles/BookCard/Bookcard.module.css';
import 'animate.css';

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
				{/* <button onClick={handleClick} className={styles.cardButton}>Add to reading list</button> */}
				<div className={`${styles.addSign} animate__animated animate__fadeInUp animate__faster`}>
					<AddSign />
				</div> 
				<div className={`${styles.info} animate__animated animate__fadeInUp animate__faster animate__delay-2s`}>
					<Info />
				</div> 
				<div>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default BookCard;