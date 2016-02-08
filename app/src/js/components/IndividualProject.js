import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import postData from '../../data/postData'
import {findProject} from '../util/utilities'

export default class IndividualProject extends Component {
  render(){
    const project = findProject(Number(this.props.params.projectId), postData)
    const backgroundImg = {backgroundImage: `url(${project.thumbnail})`}
    const projectImg = {backgroundImage: `url(${project.thumbnail})`}
    const containerClasses = classNames({
      "project-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <div className="project-image-container">
          <div className="project-image" style={projectImg}></div>
        </div>
        <div className="project-info">
          <div className="project-heading">
            <h1 className="project-title">{project.title}</h1>
            <a href={project.link} className="project-launch-btn">Launch Project</a>
          </div>
          <p className="project-brief">{project.brief}</p>
          <div className="project-metadata">
            <p>Programming Languages: {project.languages.join(", ")}</p>
            <p>Web Frameworks, Libraries, and Utilities: {project.libraries.join(", ")}</p>
            <a href={project.github}>Source Code</a>
          </div>
        </div>
      </div>
    )
  }

}
