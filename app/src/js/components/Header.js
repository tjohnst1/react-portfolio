import React, {Component} from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Isvg from 'react-inlinesvg'

export default class Header extends Component {
  render(){
    const aboutClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/about"})
    const contactClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/contact"})
    const projectsClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/projects"})
    return (
      <div className="header-container container">
        <div className="header-logo-container">
          <a href="/">
            <Isvg src="/images/tj-logo.svg">Travis Johnston</Isvg>
          </a>
        </div>
        <ul className="header-links-container">
          <li className={aboutClasses}><Link to="/about">About</Link></li>
          <li className={contactClasses}><Link to="/contact">Contact</Link></li>
          <li className={projectsClasses}><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    )
  }
}
