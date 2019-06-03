import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Tribute Website",
    'image': {
      'desc': "screenshot of my Bob Marley tribute website",
      'src': "images/project1.png",
      'comment': ""
    }
  },
  {
    'title': "Sports Catalog Web Application",
    'image': {
      'desc': "screenshot of my sports catalog web app",
      'src': "images/project2.png",
      'comment': ""
    }
  },
  {
    'title': "Color Coded Web Application",
    'image': {
      'desc': "screenshot of my color coded web app",
      'src': "images/project3.png",
      'comment': ""
    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
