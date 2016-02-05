import { CHANGE_ROUTE, FIND_PROJECT } from '../constants/constants'

export const changeRoute = () => {
  return {
    type: 'CHANGE_ROUTE'
  }
}

export const findProject = (projectId) => {
  return {
    type: 'FIND_PROJECT',
    id: projectId
  }
}
