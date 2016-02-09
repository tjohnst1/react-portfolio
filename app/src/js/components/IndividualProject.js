import React, {Component, PropTypes} from 'react'
import postData from '../../data/postData'
import {findProject} from '../util/utilities'

export default class IndividualProject extends Component {
  
  render(){
    const project = findProject(Number(this.props.params.projectId), postData)
    const projectImg = {backgroundImage: `url(${project.images})`}
    return (
      <div className="project-container">
        <div className="project-image-container">
          <img className="project-image" src={project.images} alt={`${project.title} Image`}/>
        </div>
        <div className="project-text">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-brief">{project.brief}</p>
          <div className="project-metadata">
            <h4 className="project-metadata-type">Programming Languages</h4>
            <p>{project.languages.join(", ")}</p>
            <h4 className="project-metadata-type">Web Frameworks, Libraries, and Utilities</h4>
            <p>{project.libraries.join(", ")}</p>
          </div>
          <a href={project.link} className="project-cta-btn">Launch Project</a>
          <a href={project.github} className="project-cta-btn">Source Code</a>
        </div>
      </div>
    )
  }

}
