import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Landing/navbar"
import Landing from "./Landing/Landing";
import Category from "./Category/Category";
import QuestionPage from "./Questionnaire/QuestionPage";
import ContributorForm from "./Contributor/ContributorForm";
import AnswerPage from "./Questionnaire/AnswerPage"
import reset from "reset-css";

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
        <Navbar />
        <main>
          <Switch>
            <Route path="/answerpage" component={AnswerPage} />
            <Route path="/category" component={Category} />
            <Route path="/questionpage" component={QuestionPage} />
            <Route path="/contributor" component={ContributorForm} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
