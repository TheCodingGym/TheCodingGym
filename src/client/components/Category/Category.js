// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';

// LODASH
import _ from 'lodash';

class Category extends Component {
  // renderQuestions = () => {
  //   return _.map(categoryList, question => {
  //     console.log('QUESTION', question);
  //     return (
  //       <li className="list-group-item">
  //         <Link to="/questionpage">{question}</Link>
  //       </li>
  //     );
  //   });
  // };

  render() {
    return (
      <div id="questionList" />

      // {/* <ul className="list-group">{this.renderQuestions()}</ul> */}
    );
  }
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(Category);
