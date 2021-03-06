import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Table from './table'
import axios from 'axios'
import AddNewAppForm from './addNewAppForm'
/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor() {
    super()
    this.state = {
      currentAppointments: [],
      name: '',
      time: '',
      type: '',
      address: '',
      phone: 1,
      priority: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/appointments')
    this.setState({
      currentAppointments: data
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    let {name, time, type, address, phone, priority} = this.state
    let newAptInfo = {name, time, type, address, phone, priority}
    const {data} = await axios.post('/api/appointments', newAptInfo)
    this.setState({
      currentAppointments: [...this.state.currentAppointments, data],
      name: '',
      time: '',
      type: '',
      address: '',
      phone: 1,
      priority: ''
    })
  }

  render() {
    const appointments = this.state.currentAppointments
    const {email} = this.props

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <h4>Today's Appointments🧐👩‍⚕️🩺</h4>
        <AddNewAppForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          time={this.state.time}
          type={this.state.type}
          address={this.state.address}
          phone={this.state.phone}
          priority={this.state.priority}
        />
        <Table appointments={appointments} />
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
