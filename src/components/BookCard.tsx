import { useContext, useRef } from 'react';
import { Book } from '../interfaces';

import { UIBooksContext } from '../context/UIBooksContext';
import { listContainsBook } from '../utils';
import Info from './Icons/Info';
import AddSign from './Icons/AddSign';

import styles from '../styles/BookCard/Bookcard.module.css';
import 'animate.css';
import MinusSign from './Icons/MinusSign';

interface Props {
    book: Book,
	isInReadingList?: boolean,
}

const BookCard: React.FC<Props> = ({book, isInReadingList = false}) => {
	const { readingList, addToReadingList, removeFromReadingList } = useContext(UIBooksContext);
	const bookCard = useRef();

	const handleAddBook = () => {
		if(listContainsBook(book, readingList)) return;
		addToReadingList(book);
	};

	const handleRemoveBook = () => {
		removeFromReadingList(book);
	};

	// const element = bookCard.current;
	// element.classList.add('animate__animated animate__fadeOutUp animate__faster');

	// element.addEventListener('animationend', () => {
	// 	console.log('end');
	// });

	return (
		<div key={book.ISBN} className={styles.bookCard}>
			<img src={book.cover} alt={`${book.title} cover`} />
			<div className={`${styles.addSign} animate__animated animate__fadeInUp animate__faster`} onClick={ isInReadingList ? handleRemoveBook : handleAddBook}>
				{isInReadingList ? (<MinusSign />) : (<AddSign />)}
			</div> 
			<div className={`${styles.info} animate__animated animate__fadeInUp animate__faster animate__delay-2s`}>
				<Info />
			</div> 
		</div>
	);
};

export default BookCard;