import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import Intro from './Intro'
import Isvg from 'react-inlinesvg'

export default class Home extends Component {
  render(){
    return (
        <div className="home-container">
          <Intro />
        </div>
    )
  }

}
