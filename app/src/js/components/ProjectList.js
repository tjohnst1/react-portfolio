import React, { Component } from 'react'
import { Link } from 'react-router'
import postData from '../../data/postData'
import Isvg from 'react-inlinesvg'

export default class ProjectList extends Component {
  render(){
    const projects = postData
    const projectPreviews = projects.map((project, i) => {
      const inlineStyle = {backgroundImage: `url(${project.images})`}
      return (
        <div className="project-block" onClick={() => this.props.toggleShowProject(project.id)} key={i}>
          <Link to={`projects/${project.id}`} className="project-block-link">
            <div className="project-block-img" style={{backgroundImage: `url('${project.thumbnail}')`}}></div>
            <div className="project-block-text">
              <h3 className="project-block-title">{project.title}</h3>
              <p className="project-block-description">{project.deck}</p>
            </div>
          </Link>
        </div>
      )
    })
    return (
      <div className="projects-container" id="projects">
        {projectPreviews}
      </div>
    )
  }
}
