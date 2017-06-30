import React, { Component } from 'react';
import ProjectEditor from './ProjectEditor/ProjectEditor';

class ProjectStoryBuilder extends Component {
  render() {
    return (
      <div className="ProjectStoryBuilder">
        <ProjectEditor project={this.props.project} />
      </div>
    );
  }
}

export default ProjectStoryBuilder;