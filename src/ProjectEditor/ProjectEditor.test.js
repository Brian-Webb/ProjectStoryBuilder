import React from 'react';
import ReactDOM from 'react-dom';
import ProjectEditor from './ProjectEditor';

var project_json = {
  "id": 1,
  "metadata": {
    "project_name": "Test Project",
    "assignee": "Sushil",
    "project_manager": "John"
  },
  "user_stories": [
    {
      "id": 1,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "add users",
      "so_that": "access is contolled",
      "story_points": 3
    },
    {
      "id": 2,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "delete users",
      "so_that": "access is contolled",
      "story_points": 3
    },
    {
      "id": 3,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "inactivate users",
      "so_that": "access is contolled",
      "story_points": 5
    },
    {
      "id": 4,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "view users",
      "so_that": "access is contolled",
      "story_points": 1
    }
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectEditor project={project_json} />, div);
});
