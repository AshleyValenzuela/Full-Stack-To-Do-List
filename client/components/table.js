import axios from 'axios'
import React, {Component} from 'react'

export default class Table extends Component {
  constructor() {
    super()
    this.state = {
      newAppointment: '',
      currentAppointments: []
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

  handleChange() {}

  handleSubmit() {}

  render() {
    const appointments = this.state.currentAppointments

    return (
      <table id="currentTodos">
        <tbody>
          <tr className="blue">
            <td />
            <td>#</td>
            <td>Patient Name</td>
            <td>Time</td>
            <td>Type</td>
            <td>Address</td>
            <td>Phone</td>
          </tr>
          {appointments.map((app, idx) => {
            return (
              <tr key={app.id}>
                <td>{idx + 1}</td>
                <td>{app.name}</td>
                <td>{app.time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
