import React, {Component} from 'react'
import classNames from 'classnames'
import Isvg from 'react-inlinesvg'

export default class Header extends Component {
  render(){
    const aboutClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/about"})
    const contactClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/contact"})
    const projectsClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/projects"})
    const headerContainerClasses = classNames({"nav-open": this.props.navOpen, "header-container": true})
    return (
      <div className={headerContainerClasses}>
        <Isvg src="/images/tj-logo.svg">Travis Johnston</Isvg>
        <div className="header-hamburger-container" onClick={this.props.toggleNav}>
          <div className="header-hamburger-line"></div>
        </div>
      </div>
    )
  }
}
