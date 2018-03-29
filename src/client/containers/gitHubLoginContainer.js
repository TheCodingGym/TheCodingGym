import React, { Component } from 'react';

export default class gitHubLoginContainer extends Component {
  render() {
    return <div className="gitHubWrap">{this.props.children}</div>;
  }
}
