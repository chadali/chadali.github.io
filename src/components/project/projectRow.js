import React from 'react';
import SpecificProject from './specificProject.js';

class ProjectRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  splitIntoSpecificIndex() {
    var project = this.props.project;
    var returnArray = [];
    for(var i=0; i<project.numProjects; i++) {
      returnArray.push(<SpecificProject key={i} index={i} project={project}/>);
    }

    return returnArray;
  }

  render() {
    var returnArray = this.splitIntoSpecificIndex();
    return (
      <div className="projectRow">
        <div className="projectRowTitle">
          <hr className="hr-text" data-content={this.props.project.title}></hr>
        </div>
        {returnArray}
      </div>
    );
  }
}

export default ProjectRow;
