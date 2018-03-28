import React, { Component } from 'react';
import CategoryName from './categoryName';
import BackButton from './backButton';
import NextQuestionButton from './nextQuestionButton'
class QuestionPage extends Component {
  render() {
    return <div>
      <div style={styles.categoryName}>
        <CategoryName />
      </div>
      <div style={styles.backButton}>
        <BackButton />
      </div>
      <div style={styles.nextQuestionButton}>
        <NextQuestionButton />
      </div>
    </div>
  }
}

const styles = {
  categoryName: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 810,
    left: 50,
  },
  nextQuestionButton: {
    position: 'absolute',
    top: 810,
    left: 1450,
  }
}
export default QuestionPage;
