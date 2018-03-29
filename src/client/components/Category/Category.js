// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';

//LODASH
import _ from 'lodash';

class Category extends Component {

  renderCategoryName = () => {
    const data = this.props.category;
    let selectedCategory = data[0].results[0].category;
    return selectedCategory;
  }

  renderQuestions = () => {
    const categoryList = this.props.category;
    console.log('==========STATE========', this.props)
    console.log('=== CATEGORY ===', categoryList);
    let arr = categoryList[0].results; //returns questions and id
    // let questions = _.map(arr, el => {
    //   return el.question;
    // })
    console.log('this is array in renderQ', arr)
      return (
        <div id='questionList'>
        {arr.map(el => {
          return <li className ='list-group-item' key={el.id}> {el.question}</li>
        })}
        </div>
      )
  }

  render() {
    return (
    <div id='questionContainer'>
    <div id="categoryTitle">{this.renderCategoryName()}</div>
     <ul className='list-group'>
     {this.renderQuestions()}
       </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('=== STATE ===', state);
  return { category: state.category };
}

export default connect(mapStateToProps)(Category);
