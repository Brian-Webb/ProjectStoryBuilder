import React, { Component } from 'react';
import {Row, Input} from 'react-materialize'

class ProjectMetadata extends Component {
  render() {
    return (
      <Row className="ProjectMetadata">
        <Input type="text" s={4} label="Project Name" defaultValue={this.props.metadata.project_name} />
        <Input type="text" s={4} label="Assignee" defaultValue={this.props.metadata.asignee} />
        <Input type="text" s={4} label="Project Manager" defaultValue={this.props.metadata.project_manager} />
      </Row>
    )
  }
}

export default ProjectMetadata;