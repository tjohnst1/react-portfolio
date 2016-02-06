import { createStore } from 'redux'
import rootReducer from '../reducers/portfolio'

let store = createStore(rootReducer)

export default store
