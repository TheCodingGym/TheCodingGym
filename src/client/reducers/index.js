import { combineReducers } from 'redux';
import { reducers as formReducer } from 'redux-form';

const rootReducer = combineReducer({
  form: formReducer
});

export default rootReducer;
