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
        <Link to={`projects/${project.id}`} className="project-link-container" key={i}>
          <div className="project-thumbnail-container">
            <img className="project-thumbnail" src={project.images} alt={`${project.title} Thumbnail`}/>
            <Isvg src="/images/arrow-right.svg">></Isvg>
          </div>
          <h3 className="project-thumbnail-title">{project.title}</h3>
        </Link>
      )
    })
    return (
      <div className="projects-container">
        {projectPreviews}
      </div>
    )
  }
}
