import React, { Component } from 'react';

class ProjectSelector extends Component {
  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  handleProjectClick(project_id) {
  	this.props.handleProjectClick(project_id);
  }

  render() {
  	var projects = [];

  	this.props.projects.forEach( function(project) {
      projects.push( <ProjectRow name={project.metadata.project_name} project_id={project.id} key={project.id} handleProjectClick={this.handleProjectClick} /> );
    }, this);

    return (
      <div className="ProjectSelector">
      	{projects}
      </div>
    )
  }
}

class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  handleProjectClick(e) {
  	this.props.handleProjectClick(this.props.project_id);
  }
  
  render() {
  	return (
  		<div className="ProjectRow">
  			<a onClick={this.handleProjectClick} >{this.props.name}</a>
  		</div>
  	)
  }
}

export default ProjectSelector;