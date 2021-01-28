import { createStore } from 'redux'
import sidebarReducer from '../reducers/sidebar'

// create a new redux store with createStore function
const store = createStore(sidebarReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;