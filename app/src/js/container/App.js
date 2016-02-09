import React, { Component } from 'react'
import Header from '../components/Header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'

export default class App extends Component {
  render(){
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          toggleNav: () => this.toggleNav,
          key: _.uniqueId()
        })
      }
    )
    const { path } = this.props.route
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <ReactCSSTransitionGroup transitionName="slide" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          { childrenWithProps }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
