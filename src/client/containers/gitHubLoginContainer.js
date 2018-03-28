import React, { Component } from "react";

export default class gitHubLoginContainer extends Component {
  render() {
    return <div id="gitHubWrap">{this.props.children}</div>;
  }
}
