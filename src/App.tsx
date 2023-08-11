import './App.css';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

function App() {

	return (
		<div>
			<section>
				<BookList />
			</section>
			<aside>
				<ReadingList />
			</aside>
		</div>
	);
}

export default App;
