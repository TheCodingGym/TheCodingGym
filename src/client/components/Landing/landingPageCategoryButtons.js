// REACT
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

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
    let category = e.currentTarget.value;
    this.props.fetchQuestions(category, () => {
      // this.props.history.push('/category');
    });

    // this.props.fetchQuestions(category).then(() => {
    //   console.log('=== RIGHT HEREEEEE ===');
    //   this.props.history.push('/category');
    // });
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

export default connect(null, { fetchQuestions })(LandingPageCategoryButtons);
