import React, { Component } from 'react';
import LandingPageCategoryButtons from './landingPageCategoryButtons'
import GitHubLoginButton from './gitHubLoginButton'

class Landing extends Component {
  render() {
    return <div>
      <LandingPageCategoryButtons />
      <GitHubLoginButton />
    </div>;
  }
}
export default Landing;
