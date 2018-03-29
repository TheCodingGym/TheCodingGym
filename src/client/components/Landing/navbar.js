import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import GitHubLoginButton from './gitHubLoginButton';
// import logo from './../../assets/logo.svg';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer'
  },
  gitHub: {
    backgroundColor: 'black'
  }
};

const image_style = {
  height: '50px',
  width: 'auto'
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navbar = () => (
  <AppBar
    title={
      <img
        style={image_style}
        src={'https://www.polymer-project.org/images/logos/p-logo.png'}
      />
    }
    // onTitleClick={handleClick}
    // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<GitHubLoginButton className="gitHubLogin" style={styles.gitHub} />}
  />
);

export default Navbar;
