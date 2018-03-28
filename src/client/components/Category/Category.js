// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

class Category extends Component {


  render() {
    const categoryList = this.props.category;
    console.log('==========STATE========', this.props)
    console.log('=== CATEGORY ===', categoryList);
    let arr = categoryList[0].results
    let questions = arr.map(function(el){
      return el.question;
    })
    console.log('this is questions', questions)

    return (
    <div id="questionList">
     <ul>
        {questions.map(i => <li key={i}>{i}</li>)}
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
