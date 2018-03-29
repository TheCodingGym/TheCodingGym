import { FETCH_QUESTIONS, FETCH_QUESTION } from './../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  //REDUCER
  switch (action.type) {
    case FETCH_QUESTIONS:
      return _.map(action.payload);

    case FETCH_QUESTION:
      return action.payload;

    default:
      return state;
  }
}
