import React, {Component, PropTypes} from 'react'
import Isvg from 'react-inlinesvg'

export default class Intro extends Component {
  render(){
    return (
        <div className="intro-container">
          <p className="intro-headline">Travis Johnston</p>
          <p className="intro-deck">Web Developer & Designer</p>
          <Isvg src="/images/down-arrow.svg">Learn More</Isvg>
        </div>
    )
  }

}
