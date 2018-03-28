import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('this mounted')
    console.log(this.props.location.state)
  }
  
  render() {
    return
    <div> this is Category Page </div>;
  }
}
export default Category;

