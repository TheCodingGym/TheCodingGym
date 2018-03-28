import axios from 'axios';
import CREATE_CONTRIBUTION from './types';
import FETCH_QUESTIONS from './types';
import FETCH_QUESTION from './types';
import FETCH_ANSWER from './types';
import DELETE_QUESTION from './types';

//values object is the contribution (category, question, answer)
export function createContribution(values, callback) {
  console.log('ACTION VALUES === ', values);
  //make api request. After api is resolved then call the callback function
  
  const request = axios.post('api/questions', values).then(() => callback());

  // const request = axios
  //   .post({
  //     method: 'post',
  //     url: 'api/questions',
  //     data: {
  //       category: req.body.category,
  //       question: req.body.question,
  //       answer: req.body.answer
  //     }
  //   })
  //   .then(() => console.log('=== SENT TO DATABASE ==='));

  return {
    type: CREATE_CONTRIBUTION,
    payload: request
  };
}
// PLEASE IGNORE BELOW FOR NOW
// export const createContribution = values => async dispatch => {
//   const request = await axios.post('/questions', values);
//   console.log('submitContribution values === ', values);
//   return {
//     type: CREATE_CONTRIBUTION,
//     payload: request
//   };
// };
