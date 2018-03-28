import axios from 'axios';
import {
  CREATE_CONTRIBUTION,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  FETCH_ANSWER,
  DELETE_QUESTION
} from './types';

//values object is the contribution (category, question, answer)
export function createContribution(values, callback) {
  console.log('ACTION VALUES === ', values);

  //make api request. After api is resolved then call the callback function
  const request = axios.post('api/questions', values).then(() => callback());

  return {
    type: CREATE_CONTRIBUTION,
    payload: request
  };
  // PLEASE IGNORE BELOW FOR NOW
  // export const createContribution = values => async dispatch => {
  //   const request = await axios.post('/questions', values);
  //   console.log('submitContribution values === ', values);
  //   return {
  //     type: CREATE_CONTRIBUTION,
  //     payload: request
  //   };
  // };
}

export const fetchQuestions = category => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'api/questions/',
    data: { category }
  });

  console.log('=== ACTION ===', request);

  dispatch({
    type: FETCH_QUESTIONS,
    payload: request
  });
};

// export function fetchQuestions(category, callback) {
//   const request = axios({
//     method: 'post',
//     url: 'api/questions/',
//     data: { category }
//   });

//   // .then(() => callback());

//   console.log('=== FROM ACTIONS ===', request);

//   return {
//     type: FETCH_QUESTIONS,
//     payload: request
//   };
// }
