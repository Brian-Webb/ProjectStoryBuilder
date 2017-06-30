import React, { Component } from 'react';
import {Row, Input, Button, Tabs, Tab} from 'react-materialize'
import ProjectMetadata from './ProjectMetadata';
import UserStoryList from './UserStoryList';

class ProjectEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "metadata": this.props.project.metadata,
      "user_stories": this.props.project.user_stories
    };
    
    this.handleAddStoryClick = this.handleAddStoryClick.bind(this);
    this.handleOutputJsonClick = this.handleOutputJsonClick.bind(this);
    this.handleStoryFieldChange = this.handleStoryFieldChange.bind(this);
  }

  render() {
    return (
      <div className="ProjectEditor">
        <Tabs className='tab-demo z-depth-1'>
            <Tab title="Project Information">
              <ProjectMetadata metadata={this.state.metadata} />
            </Tab>
            <Tab title="User Stories" active>
              <UserStoryList user_stories={this.state.user_stories} handleStoryFieldChange={this.handleStoryFieldChange} />
            </Tab>
        </Tabs>
        <ActionBar handleAddStoryClick={this.handleAddStoryClick} handleOutputJsonClick={this.handleOutputJsonClick} />
      </div>
    )
  }

  handleAddStoryClick() {
    var new_story = this.generateNewStory( this.state.user_stories.length + 1 );

    var user_stories = this.state.user_stories;

    user_stories.push( new_story );

    this.setState({"user_stories": user_stories});
  }

  handleOutputJsonClick() {
    var project_object = this.getCurrentProjectObject();

    console.log( JSON.stringify(project_object) );
  }

  handleStoryFieldChange(story_index, field_name, value) {
    var user_stories = this.state.user_stories;

    var story = user_stories[story_index];

    story[field_name] = value;

    user_stories[story_index] = story;

    this.setState({"user_stories": user_stories});
  }

  getCurrentProjectObject() {
    var output = {
      "id": this.props.project.id,
      "metadata": this.state.metadata,
      "user_stories": this.state.user_stories
    }

    return output;
  }

  generateNewStory(id) {
    return {
      "id": id,
      "feature": "",
      "as_a": "",
      "i_can": "",
      "so_that": "",
      "acceptance_criteria": "",
      "story_points": 1
    }
  }
}

class ProjectMetaData extends Component {
  render() {
    return (
      <Row className="ProjectMetaData">
        <Input type="text" s={4} label="Project Name" defaultValue={this.props.metadata.project_name} />
        <Input type="text" s={4} label="Assignee" defaultValue={this.props.metadata.asignee} />
        <Input type="text" s={4} label="Project Manager" defaultValue={this.props.metadata.project_manager} />
      </Row>
    )
  }
}

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

export default ProjectEditor;