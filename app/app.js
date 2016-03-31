import React, { Component } from 'react'
import store from './rdx/store.js'
import { Provider } from 'react-redux'
import UserForm from './components/user-form.js'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    )
  }
}
