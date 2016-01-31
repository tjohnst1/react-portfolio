import React, {Component} from 'react'

export default class Header extends Component {
  render(){
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <h1 className="header-logo">Travis Johnston</h1>
          <h2 className="header-subheading">Web Developer & Designer</h2>
        </div>
        <div className="header-hamburger" onClick={this.props.toggleNav}>Button</div>
      </div>
    )
  }
}
