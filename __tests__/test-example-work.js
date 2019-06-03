import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

Enzyme.configure({ adapter: new Adapter() });

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
});
