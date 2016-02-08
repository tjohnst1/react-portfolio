import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'

export default class Home extends Component {
  render(){
    const containerClasses = classNames({
      "home-container": true,
      "fixed-container": true,
      "offset": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p className="home-intro-text"><Link className="underline" to="/about">Travis</Link> is a <Link className="underline" to="/projects">front end developer</Link> currently based in Portland, Oregon.</p>
        <button className="home-btn">Porfolio</button>
        <button className="home-btn">Contact</button>
      </div>
    )
  }

}
