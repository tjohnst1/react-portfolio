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
    <Route path="home" component={Home} />
    <Route path="projects/:projectId" component={IndividualProject} />
    <IndexRoute component={Home} />
  </Route>
)
