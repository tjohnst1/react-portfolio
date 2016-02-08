import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import postData from '../../data/postData'
import Isvg from 'react-inlinesvg'

export default class ProjectList extends Component {
  render(){
    const projects = postData
    const containerClasses = classNames({
      "projects-container": true,
      "fixed-container": true,
      "offset": true,
      "closed": this.props.navShowing
    })
    const projectPreviews = projects.map((project, i) => {
      const inlineStyle = {backgroundImage: `url(${project.thumbnail})`}
      return (
        <Link to={`projects/${project.id}`} className="project-link-container" key={i}>
          <div className="project-thumbnail" style={inlineStyle}>
            <Isvg src="/images/arrow-right.svg">></Isvg>
          </div>
          <h3 className="project-thumbnail-title">{project.title}</h3>
        </Link>
      )
    })
    return (
      <div className={containerClasses}>
        {projectPreviews}
      </div>
    )
  }
}
