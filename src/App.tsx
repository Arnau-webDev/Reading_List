import { useEffect, useContext } from 'react';
import { UIBooksContext } from './context/UIBooksContext';

// components
import BookFilters from './components/BookFilters';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

// styles
import './App.css';

import { getBooksService } from './services';
import { getBookGenres } from './utils';

function App() {

	const { setAllBooks, setBookGenres, bookList, readingList } = useContext(UIBooksContext);

	const getAllBooks = async () => {
		const { library } = await getBooksService();
		setAllBooks(library);
	};

	const getAllBookGenres = async () => {
		const bookGenres = await getBookGenres();
		setBookGenres(bookGenres);
	};

	// recuperar Books
	useEffect(() => {
		getAllBooks();
		getAllBookGenres();
	}, []);

	if(!bookList) return (<h3>Loading...</h3>);
	
	return (
		<main className='mainContainer'>
			<section>
				<h1>Book List</h1>
				<BookFilters />
				<BookList bookList={bookList}/>
			</section>
			<aside>
				<ReadingList bookList={readingList}/>
			</aside>
		</main>
	);
}

export default App;
