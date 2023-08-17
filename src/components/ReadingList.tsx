import BookCard from './BookCard';
import { Library } from '../interfaces';
import { useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

import styles from '../styles/ReadingList/ReadingList.module.css';

interface Props {
	bookList: Library[]
}

const ReadingList: React.FC<Props> = ({ bookList }) => {

	const { clearReadingList } = useContext(UIBooksContext);

	const handleClick = () => {
		clearReadingList();
	};

	return (
		<div className={styles.container}>
			<h1>ReadingList</h1>
			<button onClick={handleClick} className={styles.clearBtn}>Clear reading list</button>
			<div>
				{bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} isInReadingList /> ))}
			</div>
		</div>
	);
};

export default ReadingList;

