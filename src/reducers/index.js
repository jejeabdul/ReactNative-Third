import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducers';
import SelectionReducer from './SelectionReducers';


export default combineReducers({
    libraries: LibraryReducers,
    selectedLibraryId: SelectionReducer
});