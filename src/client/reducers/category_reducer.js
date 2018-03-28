import { FETCH_QUESTIONS } from './../actions/index.js';

export default function(state = {}, action) { //REDUCER
  switch (action.type) {
    case FETCH_QUESTIONS:
    console.log('this is action.type', action.type)
      return action.payload;
    default:
      return state;
  }
}
