import React from 'react'
import App from '../container/App'
import Projects from '../components/Projects'
import IndividualProject from '../components/IndividualProject'
import { Router, Route, IndexRoute } from 'react-router'


export default (
  <Route path="/" component={App}>
    <Route path="projects" component={Projects}>
      <Route path="/project/:projectId" component={IndividualProject} />
    </Route>
  </Route>
)
