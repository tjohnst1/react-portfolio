import { CHANGE_ROUTE, FIND_PROJECT } from '../constants/constants'
import postData from ../../data/postData;
import { combineReducers } from 'redux'

const initialState = postData

const selectedProject = (state = false, action) => {
  switch (action.type){
    case 'FIND_PROJECT':
      return action.selectedProject
    default:
      return state
  }
}

const currentRoute = (state = '/', action) => {
  switch (action.type){
    case 'CHANGE_ROUTE':
      return action.route
    default:
      return state
  }
}

const projects = (state = initialState, action) => {
  switch (action.type){
    default:
      return state
  }
}

const rootReducer = combineReducers({projects, selectedProject, currentRoute})

export default rootReducer
