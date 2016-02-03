import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import postData from '../../data/postData'

export default class IndividualProject extends Component {
  componentWillUnmount(){
    console.log("here")
  }
  render(){
    const project = postData[Number(this.props.params.projectId)]
    const backgroundImg = {backgroundImage: `url(${project.thumbnail})`}
    const projectImg = {backgroundImage: `url(${project.thumbnail})`}
    const containerClasses = classNames({
      "project-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    console.log(this.props)
    return (
      <div className={containerClasses}>
        <div className="project-info">
          <div className="project-summary">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-brief">{project.brief}</p>
          </div>
          <div className="project-metadata">
            <p>Programming Languages: {project.languages.join(", ")}</p>
            <p>Web Frameworks, Libraries, and Utilities: {project.libraries.join(", ")}</p>
          </div>
          <div className="project-action-btns">
            <a href={project.link}>View Live Website</a>
            <a href={project.github}>Source Code</a>
          </div>
          <div className="project-image-container">
            <div className="project-image" style={projectImg}></div>
          </div>
        </div>
      </div>
    )
  }

}
