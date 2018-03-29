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
// import CategoryName from './categoryName';
// import QuestionBox from './questionBox';
// import BackButton from './backButton';
let clicked = false;

class QuestionPage extends Component {
  // constructor(props) {
  //   super(props);
  //   const { category } = this.props;
  //   const { question } = category;
  //   const { answer } = category;
  //   const { topic } = category;
  // }

  // renderAnswer = () => {
  //   const answer = this.props.category.answer;
  //   let result;

  //   switch (clicked) {
  //     case false:
  //       console.log('FALSE');
  //       clicked = true;
  //       result = <button onClick={this.renderAnswer}>get answer</button>;
  //     case true:
  //       console.log('TRUE');
  //       result = <button onClick={this.renderAnswer}>{answer}</button>;
  //   }
  //   return result;
  // };

  render() {
    const style = {
      height: 410,
      width: 1000,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      color: 'black'
    };

    const { category } = this.props;
    const { question } = category;
    const { answer } = category;
    const { topic } = category;

    return (
      <div>
        {/* <div style={styles.categoryName}>
          <CategoryName />
        </div> */}

        <div>
          <Paper style={style} zDepth={2}>
            {this.props.category.question}
          </Paper>
        </div>

        {/* <div style={styles.getAnswerButton}> */}
        <div>
          {this.renderAnswer()}
          {/* <button onClick={this.renderAnswer}>answer</button> */}
          {/* <GetAnswerButton onClick={this.renderAnswer} /> */}
        </div>
        {/* </div> */}

        <Link to="/category" className="contributor-back-btn btn btn-danger">
          Back
        </Link>
        <div style={styles.nextQuestionButton}>
          <NextQuestionButton />
        </div>
      </div>
    );
  }
}

const styles = {
  categoryName: {
    display: 'flex',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 810,
    left: 50
  },
  nextQuestionButton: {
    position: 'absolute',
    top: 810,
    left: 1390
  },
  getAnswerButton: {
    position: 'absolute',
    top: 750,
    left: 320
  }
  // questionBox: {
  //   position: 'absolute',
  //   top: 180,
  //   left: 320
  // }
};

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(QuestionPage);
