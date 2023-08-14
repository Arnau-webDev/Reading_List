import { useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

const BookFilters = () => {

	const { bookGenres } = useContext(UIBooksContext);

	return (
		<div>
			<label htmlFor="genre">Genres</label>
			<select name="genre" id="genre">
				{bookGenres.map((genre) => ( <option key={genre} value={genre}>{genre}</option> ))}
			</select>
		</div>
	);
};

export default BookFilters;