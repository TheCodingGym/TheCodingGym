// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// REDUX
import { connect } from 'react-redux';

// MATERIAL UI & CSS
import RaisedButton from 'material-ui/RaisedButton';
import './../../css/Category.css';

//LODASH
import _ from 'lodash';

// ACTION CREATOR
import { fetchQuestion } from './../../actions';

class Category extends Component {
  handleClick = e => {
    this.props.fetchQuestion(e);
    // this.props.fetchQuestion(e).then(() => this.props.history.push('/questionpage'));
  };

  renderCategoryName = () => {
    const data = this.props.category;
    console.log('this is data!', data);
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
            <Link onClick={() => this.handleClick(el)} to="/questionpage" key={el._id}>
              <button
                // onClick={() => this.handleClick(el)}
                type="submit"
                className="category-questions list-group-item btn btn-primary">
                {el.question}
              </button>
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
        <nav className="navbar navbar-light">
          <div id="categoryTitle">{this.renderCategoryName()}</div>
        </nav>

        <div className="question-container container">
          <form className="list-group">{this.renderQuestions()}</form>
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

export default withRouter(connect(mapStateToProps, { fetchQuestion })(Category));
