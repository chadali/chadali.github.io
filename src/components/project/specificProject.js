import React from 'react';
import {returnImage} from './helpers.js';

class SpecificProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getDescription() {
    var index = this.props.index;
    var description = this.props.project.descriptions[index];
    return description
  }

  getTechnologyImages() {
    var images = [];
    var technologies = this.props.project.technologies;
    for(var i=0; i<technologies.length; i++) {
      var technologyName = technologies[i];
      images.push(<span key={technologyName} className="tooltip"><span className="tooltiptext">{technologyName}</span>{returnImage(technologyName)}</span>)
    }
    return images;
  }

  getGithubLink() {
    var index = this.props.index;
    var gitLink = this.props.project.githubLinks[index];

    return <a href={gitLink} target="_blank" rel="noopener noreferrer">{returnImage("github")}</a>
  }

  render() {
    var projectImages = this.getTechnologyImages();
    var githubLink = this.getGithubLink();
    return (
      <div className="specificProject">
        <div className="description display-linebreak">{this.getDescription()}</div>
        <div className="specificProjectsImages">{projectImages}</div>
        <div className="githubLink">{githubLink}</div>
      </div>   
    );
  }
}

export default SpecificProject;
