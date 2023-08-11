import React from 'react';
import ReactDOM from 'react-dom/client';

import { UIBooksProvider } from './context/UIBooksProvider.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UIBooksProvider>
			<App />
		</UIBooksProvider>
	</React.StrictMode>,
);
