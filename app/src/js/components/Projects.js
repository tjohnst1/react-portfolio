import React, {Component} from 'react'
import IndividualProject from './IndividualProject'
import ProjectList from './ProjectList'
import postData from '../../data/postData'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"


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
         <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
           { /\d/.test(id) ? <IndividualProject project={project} /> : <ProjectList projects={postData} /> }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
