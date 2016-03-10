import React, {Component} from 'react'
import classNames from 'classnames'
import Isvg from 'react-inlinesvg'
import { Link } from 'react-router'

export default class Header extends Component {
  render(){
    const aboutClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/about"})
    const contactClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/contact"})
    const projectsClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/projects"})
    const headerContainerClasses = classNames({"nav-open": this.props.navOpen, "header-container": true})
    const headerHamburgerLineClasses = classNames({"header-hamburger-line": true, "dark": this.props.navIconColor === "dark", "light": this.props.navIconColor === "light"})
    return (
      <div className={headerContainerClasses}>
        <Link to={"/"}>
          <Isvg src="/images/tj-logo.svg">Travis Johnston</Isvg>
        </Link>
        <div className="header-hamburger-container" onClick={this.props.toggleNav}>
          <div className={headerHamburgerLineClasses}></div>
        </div>
      </div>
    )
  }
}
