import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Projects from '../components/Projects'

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
    const categories = ["About", "Contact", "Projects"]
    console.log(this.state)
    return (
      <div>
        <Header toggleNav={() => this.toggleNav()} />
        <Nav categories={categories} navShowing={this.state.navShowing}/>
      </div>
    )
  }

}
