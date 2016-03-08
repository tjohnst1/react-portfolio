import React, { Component } from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import ProjectList from '../components/ProjectList'
import About from '../components/About'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Projects from '../components/ProjectList'
import IndividualProject from '../components/IndividualProject'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      navOpen: false,
      showProject: false,
      selectedAnchor: null
    }
  }
  toggleNav(){
    this.setState({navOpen: !this.state.navOpen})
  }
  toggleShowProject(id){
    this.setState({
      projectId: id,
      showProject: !this.state.showProject,
    })
  }
  setAnchor(anchor){
    this.setState({selectedAnchor: anchor})
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.selectedAnchor !== null && this.state.selectedAnchor !== prevState.selectedAnchor){
      const element = document.getElementById(this.state.selectedAnchor)
      element.scrollIntoView({behavior: "smooth"})
    }
  }
  render(){
    var childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
          showProject: this.state.showProject,
          navOpen: this.state.navOpen,
          toggleNav: () => this.toggleNav(),
          toggleShowProject: () => this.toggleShowProject()
        });
    });
    return (
      <div>
        <Header navOpen={this.state.navOpen} toggleNav={() => this.toggleNav()} />
        <Nav navOpen={this.state.navOpen} toggleNav={() => this.toggleNav()} selectedAnchor={this.state.selectedAnchor} setAnchor={(anchor) => this.setAnchor(anchor)}/>
          {childrenWithProps}
        <Footer />
      </div>
    )
  }
}
