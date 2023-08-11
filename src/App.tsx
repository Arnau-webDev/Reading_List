import { useEffect, useContext } from 'react';
import { UIBooksContext } from './context/UIBooksContext';

// components
import BookFilters from './components/BookFilters';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

// styles
import './App.css';

import { getBooksService } from './services';

function App() {

	const { setAllBooks, bookList } = useContext(UIBooksContext);

	const getAllBooks = async () => {
		const { library } = await getBooksService();
		setAllBooks(library);
	};

	// recuperar Books
	useEffect(() => {
		getAllBooks();
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
				<ReadingList />
			</aside>
		</main>
	);
}

export default App;
