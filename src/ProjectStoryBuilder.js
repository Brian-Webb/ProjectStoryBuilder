import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Input} from 'react-materialize'

class ProjectStoryBuilder extends Component {
  render() {
    return (
      <div className="ProjectStoryBuilder">
        <ProjectEditor project={this.props.project} />
      </div>
    );
  }
}

class ProjectEditor extends Component {
  render() {
    return (
      <div className="ProjectEditor">
        <ProjectMetaData metadata={this.props.project.metadata} />
        <hr />
        <UserStoryList user_stories={this.props.project.user_stories} />
      </div>
    )
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

class UserStoryList extends Component {
  render() {
    var stories = [];

    this.props.user_stories.forEach( function(story) {
      stories.push( <UserStoryRow story={story} key={story.id} /> );
    });

    return (
      <div className="UserStoryList">
        {stories}
      </div>
    )
  }
}

class UserStoryRow extends Component {
  render() {
    var id = this.props.story.id;
    return (
      <Row className="UserStoryRow" data-issue-row={id}>
        <Input type="text" s={1} label="Story #" defaultValue={id} />
        <Input type="text" s={1} label="Feature" />
        <Input type="text" s={1} label="As a(n)" />
        <Input type="textarea" s={3} label="I can" />
        <Input type="textarea" s={2} label="So That" />
        <Input type="textarea" s={3} label="Acceptance Criteria" />
        <Input type="select" s={1} label="Story Points">
          <option value="1" defaultValue>1</option>
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

export default ProjectStoryBuilder;