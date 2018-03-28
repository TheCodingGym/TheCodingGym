import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import GitHubLogin from "react-github-login";
import Keys from "../../../config/keys";

const onSuccess = res => console.log(res);
const onFailure = res => console.log(res);

const styles = {
  button: {
    margin: 12
  },
  oauth: {
    backgroundColor: "red"
  },
  exampleImageInput: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    opacity: 0
  }
};

const GitHubLoginButton = () => (
  <div>
    <GitHubLogin
      clientId={Keys.githubID}
      redirectUri="http://localhost:3000/cb"
      onSuccess={onSuccess}
      onFailure={onFailure}
      style={styles.oauth}
    >
      <RaisedButton
        href="https://github.com/callemall/material-ui"
        target="_blank"
        label="Sign in with GitHub"
        style={styles.button}
        icon={<FontIcon className="fab fa-github" />}
      />
    </GitHubLogin>
  </div>
);

export default GitHubLoginButton;
