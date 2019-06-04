import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Tribute Website",
    'href': "https://bigsave24.github.io/tribute-web-page/",
    'desc': "Completed using HTML and CSS",
    'image': {
      'desc': "screenshot of my Bob Marley tribute website",
      'src': "images/project1.png",
      'comment': ""
    }
  },
  {
    'title': "Sports Catalog Web Application",
    'href': "https://github.com/BigSave24/item-catalog-project",
    'desc': "Completed using Python, Flask, SQLAlchemy, PostgresSQL, OAuth2.0, and Vagrant",
    'image': {
      'desc': "screenshot of my sports catalog web app",
      'src': "images/project2.png",
      'comment': ""
    }
  },
  {
    'title': "Color Coded Web Application",
    'href': "https://bigsave24.github.io/color-coded-game/",
    'desc': "Created using HTML, CSS, and Javascript",
    'image': {
      'desc': "screenshot of my color coded web app",
      'src': "images/project3.png",
      'comment': ""
    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
