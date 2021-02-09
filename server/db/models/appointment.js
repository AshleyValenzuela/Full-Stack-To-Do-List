const Sequelize = require('sequelize')
const db = require('../db')

const Appointment = db.define('appointment', {
  patientName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING,
    unique: true
  },
  type: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER
  }
})

module.exports = Appointment
