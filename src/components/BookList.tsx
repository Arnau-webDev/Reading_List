import BookCard from './BookCard';

import { Library } from '../interfaces';

import styles from '../styles/BookList/Booklist.module.css';
import NoContent from './NoContent';

interface Props {
	bookList: Library[]
}

const BookList: React.FC<Props> = ({bookList}) => {

	return (
		<>
			{ bookList.length < 1 
				? ( <NoContent /> ) 
				: (
					<div className={styles.bookListContainer}>
						{  bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> )) }
					</div>
				)
			}
		</>
	);
};

export default BookList;