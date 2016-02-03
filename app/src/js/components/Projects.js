import React, {Component} from 'react'
import IndividualProject from './IndividualProject'
import ProjectList from './ProjectList'
import postData from '../../data/postData'
import classNames from 'classnames'

export default class Projects extends Component {
  render(){
    let id = Number(this.props.params.projectId)
    let project = postData[id]
    const containerClasses = classNames({
      "projects-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        { /\d/.test(id) ? <IndividualProject project={project} /> : <ProjectList projects={postData} /> }
      </div>
    )
  }
}
