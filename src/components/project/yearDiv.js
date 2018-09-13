import React from 'react';
import ProjectRow from './projectRow.js';
import {returnImage} from './helpers.js';
import ReactGA from 'react-ga';

class YearDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  buildReturnArray(projects) {
    var returnArray = [];
    for(var i=0; i<projects.length; i++) {
      returnArray.push(<ProjectRow key={i} project={projects[i]}/>);
    }
    return returnArray;
  }

  handleClick(year, state) {
    this.setState((prevState) => ({
      active: !prevState.active
    }));

    if(!state) {
      ReactGA.ga((tracker) => {
        ReactGA.event({
            category: 'ClientID: ' + tracker.get('clientId'),
            action: 'Opened YearDiv: ' + year
        });
      });

    }
  }

  getYearSummary(projects) {
    var allTechnologies = [];
    var totalProjects = 0;

    for(var i=0; i<projects.length; i++) {
      totalProjects++;
      for(var j=0; j<projects[i].technologies.length; j++) {
        if(!allTechnologies.includes(projects[i].technologies[j])) {
          var technologyName = projects[i].technologies[j];
          allTechnologies.push(<span key={technologyName} className="tooltip"><span className="tooltiptext">{technologyName}</span>{returnImage(technologyName)}</span>);
        }
      }
    }

    return [totalProjects, allTechnologies];
  }

  render() {
    var projects = this.props.projects;
    var returnArray = this.buildReturnArray(projects);
    var yearSummaryInfo = this.getYearSummary(projects);

    return (
      <div className="yearDiv">

        {/* Year Header */}
        <div className={(this.state.active) ? "yearHeader active" : "yearHeader"} onClick={() => this.handleClick(this.props.year, this.state.active)}>
          <div className="openArrow">
            <img className="arrow" src={require('../../static/project/arrow.png')} alt="openIcon"/>
          </div>
          <div className="actualYear">
            <b>{this.props.year}</b>
          </div>
          <div className={(this.state.active) ? "yearSummary hidden" : "yearSummary" }>
            <div className="yearSummaryTotalProjects">{yearSummaryInfo[0] + " Projects"}</div>
            <div className="yearSummaryImages">{yearSummaryInfo[1]}</div>
          </div>
        </div>

        {/* Child Class - ProjectRow's */}
        <div className={(this.state.active) ? "yearProjects active" : "yearProjects invisible" }>
          {returnArray}
        </div>

      </div>
    );
  }
}

export default YearDiv;
