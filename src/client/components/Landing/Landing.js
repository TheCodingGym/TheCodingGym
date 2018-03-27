import React, { Component } from 'react';
import LandingPageCategoyButtons from './landingPageCategoryButtons'
import GitHubLoginButton from './gitHubLoginButton'
import Navbar from './navbar'

class Landing extends Component {
  render() {
    return <div>
      <Navbar />
      <LandingPageCategoyButtons />
      <GitHubLoginButton />
    </div>;
  }
}
export default Landing;
