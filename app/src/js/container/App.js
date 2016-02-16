import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Projects from '../components/ProjectList'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class App extends Component {
  render(){
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          toggleNav: () => this.toggleNav,
          key: child.props.location.key
        })
      }
    )
    const { path } = this.props.route
    // { childrenWithProps }
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <Home />
        <Projects toggleNav={() => this.toggleNav} />
        <Footer />
      </div>
    )
  }
}
