import { useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

const ReadingListInfo = () => {
	const { readingList } = useContext(UIBooksContext);

	return (
		<div>You have <strong>{readingList.length}</strong> books in your reading list</div>
	);
};

export default ReadingListInfo;