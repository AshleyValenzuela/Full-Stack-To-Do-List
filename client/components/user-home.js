import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Table from './table'
/**
 * COMPONENT
 */
class UserHome extends Component {
  render() {
    const {email} = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <h4>Today's Appointments🧐👩‍⚕️🩺</h4>
        <Table />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
