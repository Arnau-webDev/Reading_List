import { Library } from '../interfaces';
import { UIBooksState } from './UIBooksProvider';

type UIBooksActionType = 
| { type: 'UI - Set Books', payload: Library[] }

export const uiBooksReducer = ( state: UIBooksState, action: UIBooksActionType): UIBooksState => {

	switch (action.type) {
	case 'UI - Set Books':
		console.log('daasas', action.payload);
		return {
			...state,
			bookList: action.payload
		};
	default:
		return state;
	}

};