import { FETCH_QUESTIONS } from './../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      console.log('=== REDUCER ===', action.payload);
      return _.map(action.payload);
    default:
      return state;
  }
}
