import React, { Component } from 'react'
import { Link } from 'react-router'
import postData from '../../data/postData'
import Isvg from 'react-inlinesvg'
import * as _ from 'lodash'

export default class ProjectList extends Component {
  render(){
    const projects = postData
    const projectPreviews = projects.map((project, i) => {
      const inlineStyle = {backgroundImage: `url(${project.images})`}
      return (
        <Link to={`projects/${project.id}`} className="project-link-container" key={i}>
          <div className="project-thumbnail-container">
            <img className="project-thumbnail" src={project.images} alt={`${project.title} Thumbnail`}/>
          </div>
          <h3 className="project-thumbnail-title">{project.title}</h3>
        </Link>
      )
    })
    // <div className="projects-container transition" key={_.uniqueId()}>
    //   {projectPreviews}
    // </div>
    return (
      <div className="projects-container">
        <div className="project-block-2">
          <h3 className="project-block-title">Calorie Counter</h3>
          <p className="project-block-description">An app that does some stuff. HTML, CSS, Ruby.</p>
          <div className="project-block-img" style={{backgroundImage: "url('/images/caloriecounter-full.png')"}}></div>
        </div>
        <div className="project-block-2">
          <h3 className="project-block-title">Calorie Counter</h3>
          <p className="project-block-description">An app that does some stuff. HTML, CSS, Ruby.</p>
          <div className="project-block-img" style={{backgroundImage: "url('/images/caloriecounter-full.png')"}}></div>
        </div>
        <div className="project-block-2">
          <h3 className="project-block-title">Calorie Counter</h3>
          <p className="project-block-description">An app that does some stuff. HTML, CSS, Ruby.</p>
          <div className="project-block-img" style={{backgroundImage: "url('/images/caloriecounter-full.png')"}}></div>
        </div>
        <div className="project-block-2">
          <h3 className="project-block-title">Calorie Counter</h3>
          <p className="project-block-description">An app that does some stuff. HTML, CSS, Ruby.</p>
          <div className="project-block-img" style={{backgroundImage: "url('/images/caloriecounter-full.png')"}}></div>
        </div>
      </div>
    )
  }
}
