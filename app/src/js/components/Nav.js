import React, {Component} from 'react'
import basicInfo from '../constants/basicInfo'
import classNames from 'classnames'

export default class Nav extends Component {

  render(){
    const url = basicInfo.url
    const navLinks = this.props.categories.map((category, i) => {
      const link = `${basicInfo.url}/${category}`
      return <li key={i}><a href={link}>{category}</a></li>
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
