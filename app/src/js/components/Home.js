import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'

export default class Home extends Component {
  render(){
    return (
        <div className="home-container transition container">
          <p className="home-intro-text"><Link className="underline" to="/about">Travis</Link> is a <Link className="underline" to="/projects">front end developer</Link> currently based in Portland, Oregon.</p>
        </div>
    )
  }

}
