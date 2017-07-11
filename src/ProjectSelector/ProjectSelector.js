import React, { Component } 		 from 'react';
import {Row, Col, Button, Table} from 'react-materialize'

class ProjectSelector extends Component {
  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.handleNewStoryClick = this.handleNewStoryClick.bind(this);
  }

  render() {
  	var projects = [];

  	this.props.projects.forEach( function(project) {
      projects.push( <ProjectRow metadata={project.metadata} project_id={project.id} key={project.id} handleProjectClick={this.handleProjectClick} /> );
    }, this);

    return (
      <div className="ProjectSelector">
      	<Table stripped={true} className="ProjectSelector--table">
      		<thead>
      			<tr>
      				<th data-field="">
      					Project Name
      				</th>
      				<th>
      					Last Updated
      				</th>
      				<th>
      					Created On
      				</th>
      			</tr>
      		</thead>

      		<tbody>
      			{projects}
      		</tbody>
      	</Table>

      	<Row>
      	  <Col s={12}>
      	    <Button className="light" onClick={this.handleNewStoryClick}>New Project</Button>
      	  </Col>
      	</Row>
      </div>
    )
  }

  // input handlers
	  handleProjectClick(project_id) {
	  	this.props.handleProjectClick(project_id);
	  }

	  handleNewStoryClick() {
	  	this.props.handleNewStoryClick();
	  }
}

class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }
  
  render() {
  	console.log(this.props.metadata);

  	return (
  		<tr className="ProjectRow" onClick={this.handleProjectClick}>
  			<td>
  				<p>{this.props.metadata.project_name}</p>
  			</td>
  			<td>
  				<p>{this.props.metadata.created_at}</p>
  			</td>
  			<td>
  				<p>{this.props.metadata.updated_at}</p>
  			</td>
  		</tr>
  	)
  }

  // input handlers
	  handleProjectClick(e) {
	  	this.props.handleProjectClick(this.props.project_id);
	  }
}

export default ProjectSelector;