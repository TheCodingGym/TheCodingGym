import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributor: false
    };
  }

  render() {
    return <div> hello im APP </div>;
  }
}

export default App;
