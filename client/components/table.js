import React from 'react'

const Table = props => (
  <div>
    <table id="currentTodos">
      <tbody>
        <tr className="blue">
          <td>#</td>
          <td>Patient Name</td>
          <td>Time</td>
          <td>Type</td>
          <td>Address</td>
          <td>Phone</td>
          <td>Priority</td>
        </tr>
        {props.appointments.map((app, idx) => {
          return (
            <tr key={app.id}>
              <td>{idx + 1}</td>
              <td>{app.name}</td>
              <td>{app.time}</td>
              <td>{app.type}</td>
              <td>{app.address}</td>
              <td>{app.phone}</td>
              <td>{app.priority}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Table
