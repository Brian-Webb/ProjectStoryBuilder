import React 				 from 'react';
import ReactDOM 			 from 'react-dom';
import ProjectStoryBuilder 	 from './ProjectStoryBuilder';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin  from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// TODO: Replace hard coded project JSON with some other method of gathering them (mongodb?)
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
      "acceptance_criteria": "- it works",
      "story_points": 8
    },
    {
      "id": 2,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "delete users",
      "so_that": "access is contolled",
      "acceptance_criteria": "- it works",
      "story_points": 3
    },
    {
      "id": 3,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "inactivate users",
      "so_that": "access is contolled",
      "acceptance_criteria": "- it works",
      "story_points": 5
    },
    {
      "id": 4,
      "feature": "User Management",
      "as_a": "Admin",
      "i_can": "view users",
      "so_that": "access is contolled",
      "acceptance_criteria": "- it works",
      "story_points": 1
    }
  ]
};

ReactDOM.render(<ProjectStoryBuilder project={project_json} />, document.getElementById('root'));
registerServiceWorker();