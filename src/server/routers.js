// import { ActionQuestionAnswer } from 'material-ui';

const express = require('express');
const request = require('request');
const router = express.Router();
const QandA = require('./model.js');

router.use((req,res,next) => {
    console.log('this workig hereee');
    next();
  })
  router.get('/', (req, res) => { //on the api route localhost3000/api
    console.log('in here')
    res.json({ message: 'welcome to our api!'})
  });
  
router.route('/questions')
.post((req, res) => {
  let qAndA = new QandA();
  console.log(req.body, 'this is the post method here') // create a new instance of the model
  qAndA.category = req.body.category; 
  qAndA.question = req.body.question; // set the question coming from the request
  qAndA.answer = req.body.answer; // set the answer coming from the request
  qAndA.save(err => {
    if (err) {
      res.send(err);
    } else {
      let category = req.body.category;
      QandA.find( {category: category}, (err, question) => {
        console.log('this is q: ', question)
        console.log('this is length of request', question.length)
        let results = [];
        for (let i=0; i<question.length; i++) {
          let categoryQ = question[i].question;
          let ans = question[i].answer;
          if (categoryQ && ans) {
            results.push({
              question: categoryQ,
              answer: ans
            })
          }
        }
        res.json({
          results
        })
      })


      // QandA.find(req.params.category, (err, question) => {
      //   console.log('are we in here')
      //     // return res.json(question);
      //     console.log('this is question', question)
      //   res.json({question: question.question, answer: question.answer});
      //   })
      }
  })
})
.get((req, res) => {
  console.log(req.data, 'cateogry!!!!')
  QandA.find(req.params.questions_id, (err, question) => {
    (err, question) => {
    console.log('we here in get')
    console.log('this is data from get api side', question)
    // let category = question.category;
    // let questionList = question.question;
    if (err) {
      res.send(err);
      console.log('got an err')
    }
    // if (req.body.category === category) { //NEED TO MODIFY DEPENDING ON HOW API CALL IS MADE ON FRONT END
    // res.json(questionList); //send all algo questions
    // } else {
    //   console.log('are we in here')
      res.json(question)
    // }
    }
  })
});

router.route('/questions/:questions_id') //route added to get question by ID
.get((req, res) => {
  QandA.findById(req.params.questions_id, (err, question) => {
    if (err) {
      res.send(err);
      console.log('got an err up in hurr')
    }
    res.json(question);
  })
})
.put((req, res) => {  //route to update question
  QandA.findById(req.params.questions_id, (err, question) => {
    if (err) {
      res.send(err);
      console.log('got an err up in hurr in the put route')
    }
    question.answer = req.body.answer; //updates the answer
    question.save(err => {
      if (err) res.send(err);
      res.json({message: 'answer updated!'});
    });
  });
})
.delete((req,res) => {
  QandA.remove({
    _id: req.params.questions_id
  }, (err, question) => {
    if (err) res.send(err)
    res.json({message: 'successfully deleted'})
  });
});

router.all('*', (req, res, next) => {
  err = new Error('router.js - default catch all route - not found');
  err.status = 404;
  next(err);
});

module.exports = router;
