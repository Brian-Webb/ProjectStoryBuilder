import React, { Component } from 'react';
import {Button}  from 'react-materialize'

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.handleAddStoryClick = this.handleAddStoryClick.bind(this);
    this.handleOutputJsonClick = this.handleOutputJsonClick.bind(this);
  }

  handleAddStoryClick() {
    this.props.handleAddStoryClick();
  }

  handleOutputJsonClick() {
    this.props.handleOutputJsonClick();
  }

  render() {
    return (
      <div className="ActionBar">
        <Button className="light" onClick={this.handleAddStoryClick}>Add Story</Button>
        <Button className="light" onClick={this.handleOutputJsonClick}>Output JSON</Button>
      </div>
    );
  }
}

export default ActionBar;