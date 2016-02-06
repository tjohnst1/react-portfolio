import React, {Component} from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Header extends Component {
  render(){
    const aboutClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/about"})
    const contactClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/contact"})
    const projectsClasses = classNames({"header-links": true, "current-route": this.props.currentRoute === "/projects"})
    // const tjLogo = (<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  //                 viewBox="192.5 4.7 325 309.8" style="enable-background:new 192.5 4.7 325 309.8;" xml:space="preserve">
    //                   <style type="text/css">
    //                   	.st0{fill:none;stroke:#E01717;stroke-width:21;stroke-miterlimit:10;}
    //                   </style>
    //                   <path class="st0" d="M392.7,112.5v84.2c0,35.1-27.4,63.5-61.2,63.5s-61.2-28.4-61.2-63.5v-6.3"/>
    //                   <polyline class="st0" points="328.5,203 328.5,116.9 267.3,116.9 267.3,70.9 449.7,70.9 449.7,125.2 "/>
    //                   <rect x="203" y="15.2" class="st0" width="304" height="288.8"/>
    //                 </svg>)
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
