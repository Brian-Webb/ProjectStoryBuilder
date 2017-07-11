import React, { Component } from 'react';
import {Row, Col, Input} 		from 'react-materialize';
import { Debounce }         from 'react-throttle';
import FeatureList          from './FeatureList';

class ProjectMetadata extends Component {
  constructor(props) {
    super(props);
    this.handleMetadataFieldChange   = this.handleMetadataFieldChange.bind(this);
    this.handleMetadataFeatureChange = this.handleMetadataFeatureChange.bind(this);
  }

  render() {
    let project_name    = false;
    let assignee        = false;
    let project_manager = false;
    let features        = [];

    if(this.props.metadata) {
      project_name    = this.props.metadata.project_name    ? this.props.metadata.project_name    : '';
      assignee        = this.props.metadata.assignee        ? this.props.metadata.assignee        : '';
      project_manager = this.props.metadata.project_manager ? this.props.metadata.project_manager : '';
      features        = this.props.metadata.features        ? this.props.metadata.features        : '';
    }

    return (
	    <div className="ProjectMetadata">
	      <Row>
          <Debounce time="400" handler="onChange">
            <Input type="text" s={4} defaultValue={project_name} onChange={this.handleMetadataFieldChange} name="project_name" 	 label="Project Name" />
          </Debounce>
          <Debounce time="400" handler="onChange">
            <Input type="text" s={4} defaultValue={assignee} 		    onChange={this.handleMetadataFieldChange} name="asignee" 				 label="Assignee" />
          </Debounce>
          <Debounce time="400" handler="onChange">
            <Input type="text" s={4} defaultValue={project_manager} onChange={this.handleMetadataFieldChange} name="project_manager" label="Project Manager" />
          </Debounce>
	      </Row>

	      <Row>
	      	<Col s={6}>
	      		<FeatureList features={features} handleMetadataFeatureChange={this.handleMetadataFeatureChange} />
	      	</Col>
	      </Row>
	    </div>
    )
  }

  // input handlers
    handleMetadataFieldChange(e) {
      this.props.handleMetadataFieldChange(e.target.name, e.target.value);
    }

    handleMetadataFeatureChange(feature_index, field_name, value) {
      this.props.handleMetadataFeatureChange(feature_index, field_name, value);
    }
}

export default ProjectMetadata;