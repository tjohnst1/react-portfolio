import React, {Component} from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import basicInfo from '../../data/basicInfo'

export default class Header extends Component {
  render(){
    const navMenuClasses = classNames({"nav-open": this.props.navOpen, "nav-container": true})
    console.log(this.props)
    return (
      <div className={navMenuClasses}>
        <nav onClick={this.props.toggleNav}>
          <ul>
            <li className="nav-link"><Link to={"/"} onClick={() => this.props.setAnchor(null)}>Home</Link></li>
            <li className="nav-link"><Link to={"/#projects"} onClick={() => this.props.setAnchor('projects')}>Projects</Link></li>
            <li className="nav-link"><Link to={"/#about"} onClick={() => this.props.setAnchor('about')}>About</Link></li>
          </ul>
          <div className="nav-contact">
            <ul>
              <li><a href={basicInfo.linkedin} className="nav-contact-links">Linked In</a></li>
              <li><a href={`mailto:${basicInfo.email}?Subject=Hello!`} className="nav-contact-links">E-mail</a></li>
              <li><a href={basicInfo.github} className="nav-contact-links">GitHub</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
