import { FETCH_QUESTIONS } from './../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      console.log('=== ACTION PAYLOAD ===', action.payload);
      return _.map(action.payload);
    default:
      return state;
  }
}
