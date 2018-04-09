// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';

// LODASH
import _ from 'lodash';

// FILES
import Paper from 'material-ui/Paper';
import NextQuestionButton from './nextQuestionButton';
import GetAnswerButton from './getAnswerButton';
import './../../css/Question_Page.css';

class QuestionPage extends Component {
  //   const { category } = this.props;
  //   const { question } = category;
  //   const { answer } = category;
  //   const { topic } = category;

  renderAnswer = () => {
    let answer_element = document.createElement('div');
    answer_element.textContent = this.props.category.answer;
    document.querySelector('#answer').appendChild(answer_element);
    const btn = document.querySelector('#answer-btn');
    document.querySelector('#remove-btn').removeChild(btn);
  };

  render() {
    return (
      <div className="questionpage-container container">
        <div className="questionpage-category-container container">
          <div className="questionpage-category-paper container">
            <div className="questionpage-topic">{this.props.category.topic}</div>
          </div>
        </div>

        <div className="questionpage-question-container container">
          <div className="questionpage-question-paper container">
            <div className="questionpage-question">{this.props.category.question}</div>
          </div>
        </div>

        <div className="questionpage-answer-btn-container container" id="remove-btn">
          <button
            className="questionpage-answer-btn btn btn-primary"
            id="answer-btn"
            onClick={this.renderAnswer}>
            get answer
          </button>
        </div>

        <div className="questionpage-answer-container container">
          <div className="questionpage-answer" id="answer" />
        </div>

        <div className="questionpage-back-btn-container container">
          <Link to="/" className="questionpage-back-btn btn btn-danger">
            Back
          </Link>
        </div>

        {/* <div style={styles.nextQuestionButton}>
          <NextQuestionButton />
        </div> */}
      </div>
    );
  }
}

const style = {
  height: 410,
  width: 1000,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  color: 'black'
};

const category_style = {
  height: 70,
  width: 700,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  color: 'black'
};

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(QuestionPage);
