import React, { Component } from 'react';
import {Tabs, Tab}          from 'react-materialize';
import ProjectMetadata      from './ProjectMetadata';
import UserStoryList        from './UserStoryList';
import ActionBar            from './ActionBar';

class ProjectEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "current_tab": "project_metadata",
      "metadata": this.props.project.metadata,
      "user_stories": this.props.project.user_stories,
    };
    
    this.handleAddStoryClick = this.handleAddStoryClick.bind(this);
    this.handleAddFeatureClick = this.handleAddFeatureClick.bind(this);
    this.handleOutputJsonClick = this.handleOutputJsonClick.bind(this);
    this.handleStoryFieldChange = this.handleStoryFieldChange.bind(this);
    this.handleMetadataFieldChange = this.handleMetadataFieldChange.bind(this);
    this.handleMetadataFeatureChange = this.handleMetadataFeatureChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleBackToSelectorClick = this.handleBackToSelectorClick.bind(this);
  }

  render() {
    let metadata = {
      "project_name": "",
      "assignee": "",
      "project_manager": "",
      "features": []
    };

    let user_stories = [];

    if(this.state.metadata) {
      metadata = this.state.metadata;
    }

    if(this.state.user_stories) {
      user_stories = this.state.user_stories;
    }

    return (
      <div className="ProjectEditor">
        <Tabs className='tab-demo z-depth-1' onChange={this.handleTabChange}>
            <Tab title="Project Information" active>
              <ProjectMetadata metadata={metadata} handleMetadataFieldChange={this.handleMetadataFieldChange} handleMetadataFeatureChange={this.handleMetadataFeatureChange} />
            </Tab>
            <Tab title="User Stories">
              <UserStoryList user_stories={user_stories} features={metadata.features} handleStoryFieldChange={this.handleStoryFieldChange} />
            </Tab>
        </Tabs>
        <ActionBar handleAddStoryClick={this.handleAddStoryClick} handleAddFeatureClick={this.handleAddFeatureClick} handleOutputJsonClick={this.handleOutputJsonClick} current_tab={this.state.current_tab} handleBackToSelectorClick={this.handleBackToSelectorClick} />
      </div>
    )
  }

  // story functions
    handleAddStoryClick() {
      var new_story = this.generateNewStory( this.state.user_stories.length + 1 );

      var user_stories = this.state.user_stories;

      user_stories.push( new_story );

      this.setState({"user_stories": user_stories});
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

    handleStoryFieldChange(story_index, field_name, value) {
      var user_stories = this.state.user_stories;

      var story = user_stories[story_index];

      story[field_name] = value;

      user_stories[story_index] = story;

      this.setState({"user_stories": user_stories});
    }

  // metadata functions
    handleMetadataFieldChange(field_name, value) {
      var metadata = this.state.metadata;

      metadata[field_name] = value;

      this.setState({"metadata": metadata});
    }

    // feature functions
      handleAddFeatureClick() {
        var new_feature = this.generateNewFeature( this.state.metadata.features.length + 1);

        var metadata = this.state.metadata;
        var features = this.state.metadata.features;

        features.push( new_feature );

        metadata.features = features;

        this.setState({"metadata": metadata});
      }

      generateNewFeature(id) {
        return {
          "id": id,
          "name": ""
        }
      }

      handleMetadataFeatureChange(feature_index, field_name, value) {
        var metadata = this.state.metadata;
        var features = metadata.features;

        features[feature_index][field_name] = value;

        metadata.features = features;

        this.setState({"metadata": metadata});
      }

  // output functions
    getCurrentProjectObject() {
      var output = {
        "id": this.props.project.id,
        "metadata": this.state.metadata,
        "user_stories": this.state.user_stories
      }

      return output;
    }
    handleOutputJsonClick() {
      var project_object = this.getCurrentProjectObject();

      console.log( JSON.stringify(project_object) );
    }

  // tab functions
    handleTabChange(e) {
      var current_tab = 'user_stories'; 
      if( e === 0 ) {
        current_tab = 'project_metadata';
      }

      this.setState({"current_tab": current_tab});
    }

  // back button functions
    handleBackToSelectorClick() {
      this.props.handleBackToSelectorClick();
    }
}

export default ProjectEditor;