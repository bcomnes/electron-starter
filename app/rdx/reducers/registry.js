// ./store.js
import { combineReducers } from 'redux'
import {
  createModelReducer,
  createFormReducer
} from 'react-redux-form'

const initialUserState = {
  firstName: '',
  lastName: ''
}

export const userForm = combineReducers({
  user: createModelReducer('user', initialUserState),
  userForm: createFormReducer('user')
})
