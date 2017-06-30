import React, { Component } from 'react';
import {Row, Input} from 'react-materialize'

class ProjectMetadata extends Component {
  constructor(props) {
    super(props);
    this.handleMetadataFieldChange = this.handleMetadataFieldChange.bind(this);
  }

  handleMetadataFieldChange(e) {
    this.props.handleMetadataFieldChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <Row className="ProjectMetadata">
        <Input type="text" s={4} defaultValue={this.props.metadata.project_name} 	onChange={this.handleMetadataFieldChange} name="project_name" label="Project Name" />
        <Input type="text" s={4} defaultValue={this.props.metadata.assignee} 		onChange={this.handleMetadataFieldChange} name="asignee" label="Assignee" />
        <Input type="text" s={4} defaultValue={this.props.metadata.project_manager} onChange={this.handleMetadataFieldChange} name="project_manager" label="Project Manager" />
      </Row>
    )
  }
}

export default ProjectMetadata;