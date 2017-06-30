import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize'

class ProjectEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "metadata": this.props.project.metadata,
      "user_stories": this.props.project.user_stories
    };
    
    this.handleAddStoryClick = this.handleAddStoryClick.bind(this);
    this.handleOutputJsonClick = this.handleOutputJsonClick.bind(this);
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
      "story_points": 1
    }
  }

  render() {
    return (
      <div className="ProjectEditor">
        <ProjectMetaData metadata={this.state.metadata} />
        <hr />
        <UserStoryList user_stories={this.state.user_stories} />
        <hr />
        <ActionBar handleAddStoryClick={this.handleAddStoryClick} handleOutputJsonClick={this.handleOutputJsonClick} />
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
    var stories =[];

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