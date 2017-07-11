import React, { Component } from 'react';
import ProjectEditor 		    from './ProjectEditor/ProjectEditor';
import ProjectSelector 		  from './ProjectSelector/ProjectSelector';

class ProjectStoryBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selected_project": null
    };

    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleBackToSelectorClick = this.handleBackToSelectorClick.bind(this);
    this.handleNewStoryClick = this.handleNewStoryClick.bind(this);
  }

  render() {
    let output = null;

    if(this.state.selected_project) {
      let selected_project = this.state.selected_project;

      output = (
        <ProjectEditor project={selected_project} handleBackToSelectorClick={this.handleBackToSelectorClick} />
      );
    } else {
      output = (
        <ProjectSelector projects={this.props.projects} handleProjectClick={this.handleProjectClick} handleNewStoryClick={this.handleNewStoryClick} />
      );
    }

    return (
      <div className="ProjectSelector">
        {output}
      </div>
    );
  }

  // input handlers
    handleProjectClick(project_id) {
      var projects = this.props.projects;

      for(var i=0; i < projects.length; i++) {
        if(projects[i].id === project_id) {
          this.setState({"selected_project": projects[i]});
          return true;
        }
      }    
    }

    handleBackToSelectorClick(project_id) {
      console.log( this.props.projects );
      
      this.setState({"selected_project": null});
    }

    handleNewStoryClick(project_id) {
      // TODO: find new ID from DB when connected
      let new_project =  {
            "id": Math.floor( (Math.random()*1000) + 1 ),
            "metadata": {
              "project_name": "New Project",
              "assignee": "",
              "project_manager": "",
              "features": []
            },
            "user_stories": []
          };

      console.log(new_project);

      this.props.projects.push( new_project );

      this.setState({"selected_project": new_project});
    }
}

export default ProjectStoryBuilder;