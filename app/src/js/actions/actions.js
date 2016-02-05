import { CHANGE_ROUTE, FIND_PROJECT } from '../constants/constants'

export const changeRoute = (route) => {
  return {
    type: 'CHANGE_ROUTE',
    route: route
  }
}

export const findProject = (projectId) => {
  return {
    type: 'FIND_PROJECT',
    selectedProject: projectId
  }
}
