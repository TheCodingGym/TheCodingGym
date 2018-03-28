// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    const categoryList = this.props.category;

    console.log('=== CATEGORY ===', categoryList);
    
    return <div> this is Category Page </div>;
  }
}

function mapStatetoProps(state) {
  return { category: state.category };
}

export default connect(mapStatetoProps)(Category);
