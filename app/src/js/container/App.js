import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Projects from '../components/ProjectList'
import IndividualProject from '../components/IndividualProject'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      navOpen: false
    }
  }
  toggleNav(){
    this.setState({navOpen: !this.state.navOpen})
  }
  render(){
    // const childrenWithProps = React.Children.map(this.props.children,
    //   (child) => {
    //     return React.cloneElement(child, {
    //       toggleNav: () => this.toggleNav,
    //       key: child.props.location.key
    //     })
    //   }
    // )
    const { path } = this.props.route
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} navOpen={this.state.navOpen} toggleNav={() => this.toggleNav()} />
        <Nav navOpen={this.state.navOpen} toggleNav={() => this.toggleNav()} />
          {this.props.children}
        <IndividualProject projectId={1}/>
        <Footer />
      </div>
    )
  }
}
