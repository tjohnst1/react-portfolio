import postData from ../../data/postData;
import { combineReducers } from 'redux'

const initialState = postData

const projects = (state = initialState, action) => {
  switch (action.type){
    case 'FIND_PROJECT':
      return {
        state.filter((project) => project.id === projectId)
      }
    default:
      return state
  }
}

const route = (state = '/', action) => {
  switch (action.type){
    case 'CHANGE_ROUTE':
      return action.route
  }
}

const portfolio = combineReducers({projects, route})

export default portfolio
