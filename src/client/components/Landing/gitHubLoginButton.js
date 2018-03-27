import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { grey900 } from 'material-ui/styles/colors'

const styles = {
    button: {
        margin: 12,
        backgroundColor: 'black'
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

const GitHubLoginButton = () => (
    <div>
        <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Sign in with GitHub"
            style={styles.button}
            icon={<FontIcon className="fab fa-github" />}
        />
    </div>
);

export default GitHubLoginButton;