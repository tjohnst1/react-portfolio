import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class ProjectList extends Component {
  render(){
    const projects = this.props.projects
    const projectPreviews = projects.map((project, i) => {
      const inlineStyle = {backgroundImage: `url(${project.thumbnail})`}
      return (
        <Link to={`projects/${project.id}`} key={i} className="project-container-link fixed-container">
          <div className="project-thumbnail" style={inlineStyle}>
            <h3 className="project-thumbnail-title">{project.title}</h3>
          </div>
        </Link>
      )
    })
    const containerClasses = classNames({
      "projects-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
          {projectPreviews}
      </div>
    )
  }
}
