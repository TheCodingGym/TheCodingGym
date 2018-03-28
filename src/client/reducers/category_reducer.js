import { FETCH_QUESTIONS } from './../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
