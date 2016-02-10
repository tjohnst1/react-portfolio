import React, {Component, PropTypes} from 'react'
import postData from '../../data/postData'
import {findProject} from '../util/utilities'
import Isvg from 'react-inlinesvg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'
import { Link } from 'react-router'

export default class IndividualProject extends Component {
  render(){
    const project = findProject(Number(this.props.params.projectId), postData)
    const projectImg = {backgroundImage: `url(${project.images})`}
    const prevProjectId = (Number(this.props.params.projectId) - 1 === -1) ? (postData.length - 1) : (Number(this.props.params.projectId) - 1)
    const nextProjectId = (Number(this.props.params.projectId) + 1 === postData.length) ? 0 : (Number(this.props.params.projectId) + 1)
    const prevProject = findProject(prevProjectId, postData)
    const nextProject = findProject(nextProjectId, postData)
    return (
      <ReactCSSTransitionGroup component="div" transitionName="fade" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="project-container transition" key={_.uniqueId()}>
          <Link to={`/projects/${prevProject.id}`} className="next-project-link left">
            <Isvg src="/images/left-arrow-no-circle.svg">Previous Project</Isvg>
            <p>{prevProject.title}</p>
          </Link>
          <Link to={`/projects/${nextProject.id}`} className="next-project-link right">
            <Isvg src="/images/right-arrow-no-circle.svg">Next Project</Isvg>
            <p>{nextProject.title}</p>
          </Link>
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
      </ReactCSSTransitionGroup>
    )
  }
}
