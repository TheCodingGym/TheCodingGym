// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// FILES
import LandingPageCategoryButtons from './landingPageCategoryButtons';
import GitHubLoginContainer from '../../containers/gitHubLoginContainer';
// import LandingContainer from '../../containers/landingContainer';
import GitHubLoginButton from './gitHubLoginButton';
import Navbar from './navbar';

class Landing extends Component {
  render() {
    return (
      <div className="landing-head-container">
        <LandingPageCategoryButtons />
        <div className="github-container">
          <GitHubLoginContainer>
            <Link to="/contributor">
              <GitHubLoginButton />
            </Link>
          </GitHubLoginContainer>
        </div>
      </div>
    );
  }
}
export default Landing;
