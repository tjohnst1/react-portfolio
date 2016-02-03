import React from 'react'
import App from '../container/App'
import ProjectList from '../components/ProjectList'
import IndividualProject from '../components/IndividualProject'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import { Router, Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={App}>
    <Route path="projects" component={ProjectList} />
    <Route path="projects/:projectId" component={IndividualProject} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="home" component={Home} />
    <IndexRoute component={Home} />
  </Route>
)
