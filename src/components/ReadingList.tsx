import BookCard from './BookCard';
import { Library } from '../interfaces';

interface Props {
	bookList: Library[]
}

const ReadingList: React.FC<Props> = ({ bookList }) => {
	return (
		<div>
			<h1>ReadingList</h1>
			<div>
				{bookList.map(({ book }) => ( <BookCard key={book.ISBN} book={book} /> ))}
			</div>
		</div>
	);
};

export default ReadingList;

