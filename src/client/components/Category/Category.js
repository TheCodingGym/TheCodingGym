// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';

// LODASH
import _ from 'lodash';

// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';

class Category extends Component {
  render() {
    const style = {
      margin: 12
    };

    return (
      <div className="question-container">
        <div id="questionList" />
        <div>
          <Link to='/'>
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
