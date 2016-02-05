import React, {Component} from 'react'
import {Link} from 'react-router'
import basicInfo from '../../data/basicInfo'
import classNames from 'classnames'

export default class Nav extends Component {

  render(){
    const url = basicInfo.url
    const navLinks = this.props.categories.map((category, i) => {
      const url = `/${category.toLowerCase()}`
      return <li key={i}><Link to={url} onClick={this.props.toggleNav}>{category}</Link></li>
    })
    let navContainer = classNames({
      "nav-container": true,
      "showing": this.props.navShowing
    })
    return (
      <div className={navContainer}>
        <h3 className="nav-heading">Navigation</h3>
        <nav className="nav-category-container">
          <ul>
            {navLinks}
          </ul>
        </nav>
        <div className="nav-contact-container">
          <ul>
            <li>{basicInfo.email}</li>
            <li>{basicInfo.linkedin}</li>
            <li>{basicInfo.github}</li>
          </ul>
        </div>
      </div>
    )
  }


}
