import React, {Component} from 'react'
import postData from '../../data/postData'

export default class Projects extends Component {
  render(){
    const posts = postData.map((post, i) => {
      const inlineStyle = {backgroundImage: `url(${post.thumbnail})`}
      return (<div className="project-thumbnail" style={inlineStyle} key={i}>
               <h3 className="project-thumbnail-title">{post.title}</h3>
             </div>)
    })
    return (
      <div className="fs-container projects-container">
        {posts}
      </div>
    )
  }
}
