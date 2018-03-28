import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import '../../css/Landing.css';
import { Link } from 'react-router-dom';

const style = {
margin: '12px auto',
width: 300,
height: 50,
display: 'block'
};

class LandingPageCategoryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category: '',
        results: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let category = e.currentTarget.value;
    console.log(category);
    axios({
        method: 'post',
        url:'api/questions/',
        data: { category }
    })
    .then(res => {
        // this.setState({ 
        //     category: category,
        //     results: res.data.results
        // });
        console.log('this is the data sent back from post', res.data.results); //check back here, why di dthis not console
    })
}
  // componentDidMount() {
  //     /////////
  // }
  render() {
    return (
      <div id="categoryContainer">
      <Link to="/category">
        <RaisedButton
          label="Algorithm"
          value="Algorithm"
          primary={true}
          style={style}
          onClick={this.handleClick}
        />
    </Link>
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

export default LandingPageCategoryButtons;
