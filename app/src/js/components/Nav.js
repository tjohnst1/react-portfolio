import React, {Component} from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'

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
            <p>Travis Johnston</p>
            <p>tjohnst1@gmail.com</p>
          </div>
        </nav>
      </div>
    )
  }
}
