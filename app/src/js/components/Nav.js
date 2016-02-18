import React, {Component} from 'react'
import classNames from 'classnames'

export default class Header extends Component {
  render(){
    const navMenuClasses = classNames({"nav-open": this.props.navOpen, "nav-container": true})
    return (
      <div className={navMenuClasses}>
        <nav onClick={this.props.toggleNav}>
          <ul>
            <li className="nav-link"><a href="#">Projects</a></li>
            <li className="nav-link"><a href="#">About</a></li>
            <li className="nav-link"><a href="#">Contact</a></li>
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
