import formVisibleReducer from './form-visible-reducer';
import contentListReducer from './content-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  mainContentList: contentListReducer

});

export default rootReducer;