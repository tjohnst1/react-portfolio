import React, {Component} from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Header extends Component {
  render(){
    const aboutClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/about"})
    const contactClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/contact"})
    const projectsClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/projects"})
    console.log(this.props.currentRoute)
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <h1 className="header-logo">Travis Johnston</h1>
          <h2 className="header-subheading">Web Developer & Designer</h2>
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
