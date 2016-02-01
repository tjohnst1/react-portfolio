import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ProjectList extends Component {
  render(){
    const projects = this.props.projects
    const projectPreviews = projects.map((project, i) => {
      const inlineStyle = {backgroundImage: `url(${project.thumbnail})`}
      return (
        <Link to={`projects/${project.id}`} key={i}>
          <div className="project-thumbnail" style={inlineStyle}>
            <h3 className="project-thumbnail-title">{project.title}</h3>
          </div>
        </Link>
      )
    })
    return (
      <div className="fs-container projects-container">
        {projectPreviews}
      </div>
    )
  }
}
