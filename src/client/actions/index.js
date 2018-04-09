import axios from 'axios';
import {
  CREATE_CONTRIBUTION,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  FETCH_ANSWER,
  DELETE_QUESTION
} from './types';

// CREATE CATEGORY, QUESTION & ANSWER
export function createContribution(values, callback) {
  console.log('ACTION VALUES === ', values);

  //make api request. After api is resolved then call the callback function
  const request = axios.post('api/questions', values).then(() => callback());

  return {
    type: CREATE_CONTRIBUTION,
    payload: request
  };
}

// FETCH ALL QUESTIONS OF SPECIFIED CATEGORY
export const fetchQuestions = (category, topic) => async dispatch => {
  console.log('fetchQ category: ', category);
  console.log('fetchQ topic: ', topic);

  const request = await axios({
    method: 'post',
    url: 'api/questions/',
    data: { category, topic }
  });

  console.log('=== ACTION ===', request);

  dispatch({
    type: FETCH_QUESTIONS,
    payload: request
  });
};

// FETCH SPECIFIC QUESTION
export const fetchQuestion = e => async dispatch => {

  dispatch({
    type: FETCH_QUESTION,
    payload: e
  });
};
