// ./store.js
import { createStore, combineReducers } from 'redux'
import { modelReducer, formReducer } from 'react-redux-form'

const initialUserState = {
  firstName: 'Bret',
  lastName: 'Comnes'
}

const store = createStore(combineReducers({
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user')
}))

window.peakState = () => store.getState()

export default store
