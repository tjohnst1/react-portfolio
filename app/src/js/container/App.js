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
    }
  }
  toggleNav(){
    this.setState({navOpen: !this.state.navOpen})
  }
  toggleShowProject(id){
    console.log(id)
    this.setState({
      projectId: id,
      showProject: !this.state.showProject,
    })
  }
  render(){
    // <Intro />
    // <ProjectList toggleShowProject={(id) => this.toggleShowProject(id)} />
    // <About />
    // <IndividualProject projectId={this.state.projectId} toggleShowProject={() => this.toggleShowProject()} showProject={this.state.showProject}/>
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
        <Nav navOpen={this.state.navOpen} toggleNav={() => this.toggleNav()} />
          {childrenWithProps}
        <Footer />
      </div>
    )
  }
}
