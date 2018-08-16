import React, {Component} from 'react';
import Navbar from '../navbar.js';
import gucci from './project.js';
import YearDiv from './yearDiv.js';
import '../../static/project/styles.css'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildYearDivs() {
    var arrayOfYearDivs = [];
    var completedYears = [];
    var tempArray = [];
    for(var i=0;i<gucci.length;i++) {
      var year = gucci[i].year;
      if(!completedYears.includes(year)) {
        completedYears.push(year);
        // eslint-disable-next-line
        tempArray = gucci.filter(project => project.year === year );
        arrayOfYearDivs.push(<YearDiv key={year} year={year} projects={tempArray}/>);
        tempArray = [];
      }
    }
    return arrayOfYearDivs
  }

  render() {
    var returnedYearDivs = this.buildYearDivs();
    return (
      <div>
      <Navbar/>
      {returnedYearDivs}
      </div>
    );    
  }
}

export default Project;
