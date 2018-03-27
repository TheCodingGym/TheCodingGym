import axios from 'axios';
import CREATE_CONTRIBUTION from './types';
import FETCH_QUESTIONS from './types';
import FETCH_QUESTION from './types';
import FETCH_ANSWER from './types';
import DELETE_QUESTION from './types';

//values object is the contribution (category, question, answer)
export const createContribution = values => async dispatch => {
  const res = await axios.post('/questions', values);
  console.log('submitContribution values === ', values);
  return {
    type: CREATE_CONTRIBUTION,
    payload: res
  };
};
// export const createContribution = values => async dispatch => {
//   const res = await axios.post('/questions', values);
//   console.log('submitContribution values === ', values);
//   return {
//     type: CREATE_CONTRIBUTION,
//     payload: res
//   };
// };
