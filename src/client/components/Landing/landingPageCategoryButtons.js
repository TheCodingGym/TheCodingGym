// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// REDUX
import { connect } from 'react-redux';
// ACTION CREATOR
import { fetchQuestions } from './../../actions';
// MATERIAL UI & CSS
import RaisedButton from 'material-ui/RaisedButton';
import '../../css/Landing.css';

const style = {
  margin: '12px auto',
  width: 300,
  height: 50,
  display: 'block'
};

class LandingPageCategoryButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {

    let topic = e.currentTarget.value;
    console.log('this is topic', topic)
    let allTopics = [['Algorithm', 'Sort', 'Recursion', 'Asymptomatic Notation', 'Data Structures'],['System Design','Principles', 'System Design Patterns', 'Scalability', 'CAP Theorem'],['Front End','ReactJS','Angular', 'JavaScript','Vue','Ember','Redux','jQuery'],['Back End','Node/Express', 'PHP', '.NET', 'Ruby on Rails','SQL','NoSQL','Java']];
    let category;
    // let result = [];
    let getCategory;

    for (let i=0; i<allTopics.length; i++) {
        if (allTopics[i].includes(topic)) getCategory = i;
    }
    console.log('this is getCategory', getCategory);
    switch (getCategory) {
        case 0:
            category = "Algorithm";
            break;
        case 1:
            category = "System Design";
            break;
        case 2:
            category = "Front End";
            break;
        case 3:
            category = "Back End";
            break;
        default:
            break;
    }
    // result.push(category, topic);
    // this.props.fetchQuestions(category, () => {
    //   this.props.history.push('/category');
    // });

    this.props.fetchQuestions(category, topic).then(() => {
      this.props.history.push('/category');
    });
  };

  render() {
    return (
      <div id="categoryContainer">
        <RaisedButton
          label="Algorithm"
          value="Algorithm"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
        <br />
        <RaisedButton
          label="Sort"
          value="Sort"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
        <br />
        <RaisedButton
          label="System Design"
          value="System Design"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
        <br />
        <RaisedButton
          label="Front End"
          value="Front End"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
        <br />
        <RaisedButton
          label="Back End"
          value="Back End"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchQuestions })(LandingPageCategoryButtons));
