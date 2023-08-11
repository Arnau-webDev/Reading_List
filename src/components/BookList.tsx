import styles from '../styles/Booklist.module.css';

import { books } from '../data/books';
import { Response } from '../interfaces/index';


const BookList = () => {

	console.log(books);

	const { library }: Response = books;


	return (
		<div>
			<h1>Booklist</h1>
			<div className={styles.bookListContainer}>
				{library.map(({ book }) => (
					<div key={book.ISBN} className={styles.bookCard}>
						<img src={book.cover} alt={`${book.title} cover`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BookList;