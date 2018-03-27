import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Landing from './Landing/Landing';
import Category from './Category/Category';
import QuestionPage from './Questionnaire/QuestionPage';
import Contributor from './Contributor/Contributor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributor: false
    };
  }

  render() {
    return (
      <div className="wrapper">
        {/* header / navbar goes here */}
        <main>
          <Switch>
            <Route path="/category" component={Category} />
            <Route path="/questionpage" component={QuestionPage} />
            <Route path="/contributor" component={Contributor} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
