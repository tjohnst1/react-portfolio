import React, {Component, PropTypes} from 'react'
import Intro from './Intro'
import ProjectList from './ProjectList'
import About from './About'
import Isvg from 'react-inlinesvg'

export default class Home extends Component {
  render(){
    return (
        <div className="home-container">
          <Intro />
          <ProjectList />
          <About />
        </div>
    )
  }

}
