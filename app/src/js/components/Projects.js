import React, {Component} from 'react'
import IndividualProject from './IndividualProject'
import ProjectList from './ProjectList'
import postData from '../../data/postData'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import classNames from 'classnames'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    let id = Number(this.props.params.projectId)
    let project = postData[id]
    return (
      <div>
        { /\d/.test(id) ? <IndividualProject project={project} /> : <ProjectList projects={postData} /> }
      </div>
    )
  }
}
