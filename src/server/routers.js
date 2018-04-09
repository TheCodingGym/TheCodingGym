// import { ActionQuestionAnswer } from 'material-ui';

const express = require('express');
const request = require('request');
const router = express.Router();
const QandA = require('./model.js');

router.use((req, res, next) => {
  console.log('router is working in router.js line9');
  next();
});
router.get('/', (req, res) => {
  console.log('in here');
  res.json({ message: 'api created' });
});

router
  .route('/questions')
  .post((req, res) => {
    let qAndA = new QandA();
    console.log(req.body, 'inside POST method'); // create a new instance of the model
    qAndA.category = req.body.category;
    qAndA.topic = req.body.topic;
    qAndA.question = req.body.question;
    qAndA.answer = req.body.answer;
    //SAVING CREATED REQUEST BODY INTO DB
    qAndA.save(err => {
      if (err) {
        res.send(err);
      } else {
        let selectedTopic = req.body.topic;
        let selectedCategory = req.body.category;
        if (selectedTopic === selectedCategory) {
          QandA.find({ category: selectedCategory }, (err, question) => {
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
    QandA.find(req.params.questions_id, (err, question) => {
      (err, question) => {
        if (err) {
          res.send(err);
          console.log('got an err');
        }
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
        console.log('err in GET :id');
      }
      res.json(question);
    });
  })
  .put((req, res) => {//route to update question
    QandA.findById(req.params.questions_id, (err, question) => {
      if (err) {
        res.send(err);
        console.log('err in PUT :id');
      }
      question.answer = req.body.answer; //updates the answer
      question.save(err => {
        if (err) res.send(err);
        res.json({ message: 'ans updated in PUT' });
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
