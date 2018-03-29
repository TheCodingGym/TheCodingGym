// import { ActionQuestionAnswer } from 'material-ui';

const express = require('express');
const request = require('request');
const router = express.Router();
const QandA = require('./model.js');

router.use((req, res, next) => {
  console.log('this workig hereee');
  next();
});
router.get('/', (req, res) => {
  //on the api route localhost3000/api
  console.log('in here');
  res.json({ message: 'welcome to our api!' });
});

router
  .route('/questions')
  .post((req, res) => {
    let qAndA = new QandA();
    console.log(req.body, 'this is the post method here'); // create a new instance of the model
    qAndA.category = req.body.category;
    qAndA.topic = req.body.topic;
    qAndA.question = req.body.question; // set the question coming from the request
    qAndA.answer = req.body.answer; // set the answer coming from the request
    qAndA.save(err => {
      if (err) {
        res.send(err);
      } else {
        let selectedTopic = req.body.topic;
        let selectedCategory = req.body.category;
        // console.log(
        //   'this is selectedTopic: ',
        //   selectedTopic,
        //   ' and this is the selectedCategory:  ',
        //   selectedCategory
        // );
        if (selectedTopic === selectedCategory) {
          //USER SELECTED GENERAL CATEGORY AS TOPIC
          QandA.find({ category: selectedCategory }, (err, question) => {
            // console.log('this the question returned in back', question);
            let results = [];
            for (let i = 0; i < question.length; i++) {
              let quest = question[i].question;
              let ans = question[i].answer;
              if (quest && ans) {
                results.push(question[i]);
              }
            }
            res.json({
              results
            });
          });
        } else {
          //USER WANTS SPECIFIC QUESTION TOPICS
          QandA.find({ topic: selectedTopic }, (err, question) => {
            // console.log(
            //   'this the question returned in back when a specific topic is selected',
            //   question
            // );
            let results = [];
            for (let i = 0; i < question.length; i++) {
              let quest = question[i].question;
              let ans = question[i].answer;
              if (quest && ans) {
                results.push(question[i]);
              }
            }
            res.json({
              results
            });
          });
        }
      }
    });
  })
  .get((req, res) => {
    // console.log(req.data, 'cateogry!!!!');
    QandA.find(req.params.questions_id, (err, question) => {
      (err, question) => {
        console.log('we here in get');
        // console.log('this is data from get api side', question);
        // let category = question.category;
        // let questionList = question.question;
        if (err) {
          res.send(err);
          console.log('got an err');
        }
        // if (req.body.category === category) { //NEED TO MODIFY DEPENDING ON HOW API CALL IS MADE ON FRONT END
        // res.json(questionList); //send all algo questions
        // } else {
        //   console.log('are we in here')
        res.json(question);
      };
    });
  });
router
  .route('/questions/:id') //route added to get question by ID
  .get((req, res) => {
    QandA.findById(req.params.id, (err, question) => {
      if (err) {
        res.send(err);
        console.log('got an err up in hurr');
      }
      res.json(question);
    });
  })
  .put((req, res) => {
    //route to update question
    QandA.findById(req.params.questions_id, (err, question) => {
      if (err) {
        res.send(err);
        console.log('got an err up in hurr in the put route');
      }
      question.answer = req.body.answer; //updates the answer
      question.save(err => {
        if (err) res.send(err);
        res.json({ message: 'answer updated!' });
      });
    });
  })
  .delete((req, res) => {
    QandA.remove(
      {
        _id: req.params.questions_id
      },
      (err, question) => {
        if (err) res.send(err);
        res.json({ message: 'successfully deleted' });
      }
    );
  });

router.all('*', (req, res, next) => {
  err = new Error('router.js - default catch all route - not found');
  err.status = 404;
  next(err);
});

module.exports = router;
