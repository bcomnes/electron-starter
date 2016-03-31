import React, { PropTypes } from 'react'
import { Field } from 'react-redux-form'
import { connect } from 'react-redux'

class UserForm extends React.Component {
  render () {
    let { user } = this.props

    return (
      <form>
        <Field model='user.firstName'>
          <label>First name:</label>
          <input type='text' />
        </Field>

        <Field model='user.lastName'>
          <label>Last name:</label>
          <input type='text' />
        </Field>

        <button type='submit'>
          Finish registration, {user.firstName} {user.lastName}!
        </button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return { user: state.user }
}

UserForm.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps)(UserForm)
