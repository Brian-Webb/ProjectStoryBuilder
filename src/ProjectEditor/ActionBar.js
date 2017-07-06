import React, { Component } from 'react';
import {Button}             from 'react-materialize'

class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.handleAddStoryClick = this.handleAddStoryClick.bind(this);
    this.handleAddFeatureClick = this.handleAddFeatureClick.bind(this);
    this.handleOutputJsonClick = this.handleOutputJsonClick.bind(this);
    this.handleBackToSelectorClick = this.handleBackToSelectorClick.bind(this);
  }

  render() {
  	var add_button = <Button className="light" onClick={this.handleAddStoryClick}>Add Story</Button>;

  	if(this.props.current_tab === 'project_metadata') {
  		add_button = <Button className="light" onClick={this.handleAddFeatureClick}>Add Feature</Button>
  	}

    return (
      <div className="ActionBar">
        {add_button}
        <Button className="light" onClick={this.handleOutputJsonClick}>Output JSON</Button>
        <Button className="light" onClick={this.handleBackToSelectorClick}>Back</Button>
      </div>
    );
  }

  // input handlers
    handleAddStoryClick() {
      this.props.handleAddStoryClick();
    }

    handleAddFeatureClick() {
      this.props.handleAddFeatureClick();
    }

    handleOutputJsonClick() {
      this.props.handleOutputJsonClick();
    }
    handleBackToSelectorClick() {
      this.props.handleBackToSelectorClick();
    }
}

export default ActionBar;