import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      navShowing: false,
      currentRoute: "/"
    }
  }

  toggleNav(){
    this.setState({navShowing: !this.state.navShowing})
  }

  setCurrentRoute(route){
    this.setState({currentRoute: route})
  }

  render(){
    const categories = ["Home", "About", "Contact", "Projects"]
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          toggleNav: () => this.toggleNav,
          navShowing: this.state.navShowing,
          setCurrentRoute: (route) => this.setCurrentRoute,
          key: _.uniqueId()
        })
      }
    )
    const { path } = this.props.route
    return (
      <div>
        <Header toggleNav={() => this.toggleNav()} currentRoute={path} />
        <Nav categories={categories} navShowing={this.state.navShowing} toggleNav={() => this.toggleNav()}/>
        <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          { childrenWithProps }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
