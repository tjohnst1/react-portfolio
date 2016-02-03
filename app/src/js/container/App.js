import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { TransitionMotion, spring } from 'react-motion';

import * as _ from 'lodash'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      navShowing: false
    }
  }

  toggleNav(){
    this.setState({navShowing: !this.state.navShowing})
  }

  render(){
    const categories = ["Home", "About", "Contact", "Projects"]
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          toggleNav: () => this.toggleNav,
          navShowing: this.state.navShowing,
          key: _.uniqueId()
        })
      }
    )
    let { path } = this.props.route
    return (
      <div>
        <Header toggleNav={() => this.toggleNav()} />
        <Nav categories={categories} navShowing={this.state.navShowing} toggleNav={() => this.toggleNav()}/>
        { this.props.children }
      </div>
    )
  }
}
