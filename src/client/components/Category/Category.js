// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';
//LODASH
import _ from 'lodash';

class Category extends Component {
  renderCategoryName = () => {
    const data = this.props.category;
    let selectedCategory = data[0].results[0].category;
    return selectedCategory;
  };

  renderQuestions = () => {
    const categoryList = this.props.category;
    console.log('=== CATEGORY ===', categoryList);
    let arr = categoryList[0].results; //returns questions and id

    console.log('this is array in renderQ', arr);
    return (
      <div id="questionList">
        {arr.map(el => {
          return (
            <Link to="/questionpage">
              <li className="list-group-item" key={el.id}>
                {el.question}
              </li>
            </Link>
          );
        })}
      </div>
    );
  };

  render() {
    const style = {
      margin: 12
    };

    return (
      <div className="category-container container">
        <div id="categoryTitle">{this.renderCategoryName()}</div>

        <div className="question-container container">
          <ul className="list-group">{this.renderQuestions()}</ul>
        </div>

        <div className="category-back-btn text-xs-left">
          <Link to="/">
            <RaisedButton label="Back" secondary={true} style={style} />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(Category);
