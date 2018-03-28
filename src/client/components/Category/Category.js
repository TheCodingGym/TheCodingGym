// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    const categoryList = this.props.category;
    console.log('==========STATE========', this.props)
    console.log('=== CATEGORY ===', categoryList);

    return <div> this is Category Page </div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    category: ownProps.category
  };
}

export default connect(mapStateToProps)(Category);
