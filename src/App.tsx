import { useEffect, useState } from 'react';

// components
import BookFilters from './components/BookFilters';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

// data

// styles
import './App.css';
import { BookListResponse } from './interfaces';
import { getBooksService } from './services';


function App() {
	const [books, setBooks] = useState<BookListResponse>({ library:[] });

	const getAllBooks = async () => {
		const books = await getBooksService();
		if(books) setBooks(books);
	};

	// recuperar Books
	useEffect(() => {
		getAllBooks();
	}, []);
	

	return (
		<main className='mainContainer'>
			<section>
				<h1>Book List</h1>
				<BookFilters />
				<BookList bookList={books}/>
			</section>
			<aside>
				<ReadingList />
			</aside>
		</main>
	);
}

export default App;
