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
  display: 'block',
  backgroundColor: 'black !important'
};

const nested_style = {
  margin: '12px auto',
  width: 250,
  height: 30,
  display: 'block'
};

class LandingPageCategoryButtons extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    let category = e.currentTarget.value;

    this.props.fetchQuestions(category).then(() => {
      this.props.history.push('/category');
    });

    // this.props.fetchQuestions(category, () => {
    //   this.props.history.push('/category');
    // });
  };

  render() {
    return (
      <div id="category-btn-container">
        {/*
        ///////////
        /// CATEGORY LEFT - ALGORITHM & SYSTEM DESIGN
        ///////////
        */}
        <div className="category-left container">
          {/* ALGORITHM */}
          <div className="category-algorithm">
            <RaisedButton
              label="Algorithm"
              value="Algorithm"
              primary={true}
              style={style}
              onClick={this.handleClick}
            />
            <div className="category-btn-nested container">
              <RaisedButton
                label="Sort"
                value="Sort"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Recursion"
                value="Recursion"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Asymptomatic Notation"
                value="Asymptomatic Notation"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Data Structures"
                value="Data Structures"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
            </div>
          </div>

          {/* FRONT END */}
          <div className="category-front-end">
            <RaisedButton
              label="Front End"
              value="Front End"
              primary={true}
              style={style}
              onClick={this.handleClick}
            />
            <div className="category-btn-nested container">
              <RaisedButton
                label="ReactJS"
                value="ReactJS"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Angular"
                value="Angular"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Vue"
                value="Vue"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Ember"
                value="Ember"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Redux"
                value="Redux"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="jQuery"
                value="jQuery"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="JavaScript"
                value="JavaScript"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>

        {/*
        ///////////
        /// CATEGORY RIGHT - FRONT-END & BACK-END
        ///////////
        */}
        <div className="category-right container">
          {/* SYSTEM DESIGN */}
          <div className="category-system-design">
            <RaisedButton
              label="System Design"
              value="System Design"
              primary={true}
              style={style}
              onClick={this.handleClick}
            />
            <div className="category-btn-nested container">
              <RaisedButton
                label="Principles"
                value="Principles"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="System Design Patterns"
                value="System Design Patterns"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Scalability"
                value="Scalability"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="CAP Theorem"
                value="CAP Theorem"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
            </div>
          </div>

          {/* BACK END */}
          <div className="category-back-end">
            <RaisedButton
              label="Back End"
              value="Back End"
              primary={true}
              style={style}
              onClick={this.handleClick}
            />
            <div className="category-btn-nested container">
              <RaisedButton
                label="Node/Express"
                value="Node/Express"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="PHP"
                value="PHP"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label=".NET"
                value=".NET"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Ruby on Rails"
                value="Ruby on Rails"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="Java"
                value="Java"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="SQL"
                value="SQL"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
              <RaisedButton
                label="NoSQL"
                value="NoSQL"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchQuestions })(LandingPageCategoryButtons));
