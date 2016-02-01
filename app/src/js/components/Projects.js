import React, {Component} from 'react'
import IndividualProject from './IndividualProject'
import postData from '../../data/postData'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    let id = Number(this.props.params.projectId)
    let project = postData[id]
    console.log(project)
    const posts = postData.map((post, i) => {
      const inlineStyle = {backgroundImage: `url(${post.thumbnail})`}
      return (<div className="project-thumbnail" style={inlineStyle} key={i}>
               <h3 className="project-thumbnail-title">{post.title}</h3>
             </div>)
    })
    return (
      <div className="fs-container projects-container">
        {posts}
        {id !== undefined ? <IndividualProject project={project} /> : null}
      </div>
    )
  }
}
