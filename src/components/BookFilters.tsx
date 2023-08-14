import { useState, useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';
import { ALL_GENRES } from '../constants';

const BookFilters = () => {

	const [pages, setPages] = useState(0);
	const { bookGenres, filterByGenre, filterByPages } = useContext(UIBooksContext);

	const handleOnChangePages = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = target;
		setPages(value as unknown as number);
		filterByPages(value as unknown as number);
	};

	const handleChangeGenre = ({ target }: React.ChangeEvent<HTMLSelectElement>): void => {
		const { value } = target;
		filterByGenre(value);
	};

	return (
		<div>
			<div>
				<label htmlFor="genre">Genres</label>
				<select name="genre" onChange={(e) => handleChangeGenre(e)}>
					<option value={ALL_GENRES}>{ALL_GENRES}</option>
					{bookGenres.map((genre) => ( <option key={genre} value={genre}>{genre}</option> ))}
				</select>
			</div>

			<div>
				<div>
					<label htmlFor="numOfPages">Maximum number of Pages</label>
					<input type="range" name='numOfPages' min={0} max={1200} value={pages} onChange={(e) => handleOnChangePages(e)}/>
				</div>
				<span>{pages}</span>
			</div>
		</div>
	);
};

export default BookFilters;