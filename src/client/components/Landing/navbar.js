// REACT
import React from 'react';
import { Link } from 'react-router-dom';

// MATERIAL UI
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import GitHubLoginButton from './gitHubLoginButton';

const styles = {
  title: {
    cursor: 'pointer'
  },
  gitHub: {
    backgroundColor: 'black'
  }
};

const title_style = {
  cursor: 'pointer',
  textDecoration: 'none'
};

const link_style = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '26px'
};

const image_style = {
  height: '50px',
  width: 'auto',
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navbar = () => (
  <AppBar
    title={
      <Link to="/" style={link_style}>
        <span style={title_style}>The Coding Gym</span>
      </Link>
    }
    iconElementLeft={
      <Link to="/">
        <IconButton tooltip="Home" iconStyle={image_style}>
          <img src={'https://image.flaticon.com/icons/svg/249/249187.svg'} />
        </IconButton>
      </Link>
    }
    // showMenuIconButton={false}
    iconElementRight={<GitHubLoginButton className="gitHubLogin" style={styles.gitHub} />}
  />
);

export default Navbar;
