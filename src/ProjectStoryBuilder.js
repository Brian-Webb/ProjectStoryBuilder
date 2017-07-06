import React, { Component } from 'react';
import ProjectEditor 		    from './ProjectEditor/ProjectEditor';
import ProjectSelector 		  from './ProjectSelector/ProjectSelector';

class ProjectStoryBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selected_project": false
    };

    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  handleProjectClick(project_id) {
    var projects = this.props.projects;

    for(var i=0; i < projects.length; i++) {
      if(projects[i].id == project_id) {
        this.setState({"selected_project": projects[i]});
        return true;
      }
    }    
  }

  render() {
    let output = null;

    if(this.state.selected_project) {
      output = (
        <ProjectEditor project={this.state.selected_project} />
      );
    } else {
      output = (
        <ProjectSelector projects={this.props.projects} handleProjectClick={this.handleProjectClick} />
      );
    }

    return (
      <div className="ProjectSelector">
        {output}
      </div>
    );
  }
}

export default ProjectStoryBuilder;