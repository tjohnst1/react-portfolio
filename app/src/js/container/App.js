import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import IndividualProject from '../components/IndividualProject'
import postData from '../../data/postData'

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
    return (
      <div>
        <Header toggleNav={() => this.toggleNav()} />
        <Projects />
        <IndividualProject project={postData[0]}/>
        <Nav categories={categories} navShowing={this.state.navShowing}/>
      </div>
    )
  }
}
