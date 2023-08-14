import BookCard from './BookCard';
import { Library } from '../interfaces';
import { useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

interface Props {
	bookList: Library[]
}

const ReadingList: React.FC<Props> = ({ bookList }) => {

	const { clearReadingList } = useContext(UIBooksContext);

	const handleClick = () => {
		clearReadingList();
	};

	return (
		<div>
			<h1>ReadingList</h1>
			<button onClick={handleClick}>Clear reading list</button>
			<div>
				{bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> ))}
			</div>
		</div>
	);
};

export default ReadingList;

