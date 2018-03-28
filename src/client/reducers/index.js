import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CategoryReducer from './category_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  category: CategoryReducer
});

export default rootReducer;
