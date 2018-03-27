import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { grey900 } from 'material-ui/styles/colors'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import GitHubLoginButton from './gitHubLoginButton'

function handleClick() {
    alert('onClick triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
    gitHub: {
        backgroundColor: '#000000',
        color: 'white'
    },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navbar = () => (
    <AppBar
        title={<span style={styles.title}>Logo</span>}
        onTitleClick={handleClick}
        // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<GitHubLoginButton style={styles.gitHub} />}
    />
);

export default Navbar;