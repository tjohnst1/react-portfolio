import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'
import Isvg from 'react-inlinesvg'

export default class Home extends Component {
  render(){
    return (
        <div className="home-container">
          <p className="home-intro-headline">Travis Johnston</p>
          <p className="home-intro-deck">Web Developer & Designer</p>
          <Isvg src="/images/down-arrow.svg">Learn More</Isvg>
        </div>
    )
  }

}
