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
  marginTop: '10px',
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
        src={'https://image.flaticon.com/icons/svg/249/249187.svg'}
      />
    }
    // title={<p>The Coding Gym</p>}
    showMenuIconButton={false}
    iconElementRight={<GitHubLoginButton className="gitHubLogin" style={styles.gitHub} />}
  />
);

export default Navbar;
