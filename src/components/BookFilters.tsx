import { useState, useContext } from 'react';
import { UIBooksContext } from '../context/UIBooksContext';

const BookFilters = () => {

	const [pages, setPages] = useState(0);
	const { bookGenres } = useContext(UIBooksContext);

	const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = target;
		setPages(value as unknown as number);
	};

	return (
		<div>
			<div>
				<label htmlFor="genre">Genres</label>
				<select name="genre">
					{bookGenres.map((genre) => ( <option key={genre} value={genre}>{genre}</option> ))}
				</select>
			</div>

			<div>
				<div>
					<label htmlFor="numOfPages">Number of Pages</label>
					<input type="range" name='numOfPages' min={0} max={1200} value={pages} onChange={(e) => handleOnChange(e)}/>
				</div>
				<span>{pages}</span>
			</div>
		</div>
	);
};

export default BookFilters;