import React, { Component } from 'react';
import LandingPageCategoryButtons from './landingPageCategoryButtons'
import GitHubLoginButton from './gitHubLoginButton'
import Navbar from './navbar'

class Landing extends Component {
  render() {
    return <div>
      <Navbar />
      <LandingPageCategoryButtons />
      <GitHubLoginButton />
    </div>;
  }
}
export default Landing;
