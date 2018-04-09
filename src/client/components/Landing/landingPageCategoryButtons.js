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
  fontWeight: '300',
  color: 'grey500',
  background: 'grey500',
  backgroundColor: 'grey500'
};

const nested_style = {
  margin: '12px auto',
  width: 250,
  height: 30,
  display: 'block'
};

const image = {
  height: '22px',
  width: 'auto'
};

class LandingPageCategoryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      topic: ''
    }
  }

  handleClick = e => {
    let topic = e.currentTarget.value;
    let allTopics = [
      [
        'Algorithm',
        'Sort',
        'Recursion',
        'Asymptomatic Notation',
        'Data Structures'
      ],
      [
        'System Design',
        'Principles',
        'System Design Patterns',
        'Scalability',
        'CAP Theorem'
      ],
      [
        'Front End',
        'ReactJS',
        'Angular',
        'JavaScript',
        'Vue',
        'Ember',
        'Redux',
        'jQuery'
      ],
      [
        'Back End',
        'Node/Express',
        'PHP',
        '.NET',
        'Ruby on Rails',
        'SQL',
        'NoSQL',
        'Java'
      ]
    ];
    let category;
    let getCategoryIndex;

    for (let i = 0; i < allTopics.length; i++) {
      if (allTopics[i].includes(topic)) getCategoryIndex = i;
    }
    // console.log('this is getCategoryIndex', getCategoryIndex);
    switch (getCategoryIndex) {
      case 0:
        category = 'Algorithm';
        break;
      case 1:
        category = 'System Design';
        break;
      case 2:
        category = 'Front End';
        break;
      case 3:
        category = 'Back End';
        break;
      default:
        break;
    }

    this.props.fetchQuestions(category, topic).then(() => {
      this.props.history.push('/category');
    });
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
                icon={
                  <img
                    style={image}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="Angular"
                value="Angular"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={'http://www.codedealer.xyz/static/img/skills/angular-icon.svg'}
                  />
                }
              />
              <RaisedButton
                label="Vue"
                value="Vue"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg'
                    }
                  />
                }
              />
              <RaisedButton
                label="Ember"
                value="Ember"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'http://icons.iconarchive.com/icons/sicons/basic-round-social/512/ember-js-icon.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="Redux"
                value="Redux"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="jQuery"
                value="jQuery"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://i.pinimg.com/originals/99/99/c1/9999c1a8c347b81c5cb5df967664c4c3.gif'
                    }
                  />
                }
              />
              <RaisedButton
                label="JavaScript"
                value="JavaScript"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'data:image/png;base64,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'
                    }
                  />
                }
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
                icon={
                  <img
                    style={image}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="PHP"
                value="PHP"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
                    }
                  />
                }
              />
              <RaisedButton
                label=".NET"
                value=".NET"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://logos-download.com/wp-content/uploads/2017/07/Microsoft_.NET_logo.svg'
                    }
                  />
                }
              />
              <RaisedButton
                label="Ruby on Rails"
                value="Ruby on Rails"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="Java"
                value="Java"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={'http://www.benmvp.com/slides/img/react-sans-node/java.png'}
                  />
                }
              />
              <RaisedButton
                label="SQL"
                value="SQL"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png'
                    }
                  />
                }
              />
              <RaisedButton
                label="NoSQL"
                value="NoSQL"
                primary={true}
                style={nested_style}
                onClick={this.handleClick}
                icon={
                  <img
                    style={image}
                    src={
                      'https://zdnet2.cbsistatic.com/hub/i/r/2016/11/02/c8355e96-d906-457f-a3ac-77ac3c0538d6/thumbnail/770x578/52b97356c653cbafd654592ebf06dca7/mongodb-logo.png'
                    }
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchQuestions })(LandingPageCategoryButtons));
