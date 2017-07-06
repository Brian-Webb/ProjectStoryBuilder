import React, { Component } from 'react';
import {Row, Input} 		from 'react-materialize'

class UserStoryList extends Component {
  constructor(props) {
    super(props);
    this.handleStoryFieldChange = this.handleStoryFieldChange.bind(this);
  }

  handleStoryFieldChange(key, field_name, value) {
    var story_index = key - 1;

    this.props.handleStoryFieldChange(story_index, field_name, value);
  }
  
  render() {
    var stories = [];
    
    this.props.user_stories.forEach( function(story) {
      stories.push( <UserStoryRow story={story} key={story.id} handleStoryFieldChange={this.handleStoryFieldChange} /> );
    }, this);

    return (
      <div className="UserStoryList">
        {stories}
      </div>
    )
  }
}

class UserStoryRow extends Component {
  constructor(props) {
    super(props);
    this.handleStoryFieldChange = this.handleStoryFieldChange.bind(this);
  }

  handleStoryFieldChange(e) {
    this.props.handleStoryFieldChange(this.props.story.id, e.target.name, e.target.value);
  }

  render() {
    var id = this.props.story.id,
        feature = this.props.story.feature,
        as_a = this.props.story.as_a,
        i_can = this.props.story.i_can,
        so_that = this.props.story.so_that,
        acceptance_criteria = this.props.story.acceptance_criteria,
        story_points = this.props.story.story_points;

    return (
      <Row className="UserStoryRow" data-issue-row={id}>
        <Input type="text"     s={1}  defaultValue={id}                  name="id"                  onChange={this.handleStoryFieldChange} label="Story #" />
        <Input type="text"     s={1}  defaultValue={feature}             name="feature"             onChange={this.handleStoryFieldChange} label="Feature" />
        <Input type="text"     s={1}  defaultValue={as_a}                name="as_a"                onChange={this.handleStoryFieldChange} label="As a(n)" />
        <Input type="textarea" s={3}  defaultValue={i_can}               name="i_can"               onChange={this.handleStoryFieldChange} label="I can" />
        <Input type="textarea" s={2}  defaultValue={so_that}             name="so_that"             onChange={this.handleStoryFieldChange} label="So That" />
        <Input type="textarea" s={3}  defaultValue={acceptance_criteria} name="acceptance_criteria" onChange={this.handleStoryFieldChange} label="Acceptance Criteria" />
        <Input type="select"   s={1}  defaultValue={story_points}        name="story_points"        onChange={this.handleStoryFieldChange} label="Story Points" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Input>
      </Row>
    )
  }
}

export default UserStoryList;