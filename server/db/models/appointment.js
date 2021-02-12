const Sequelize = require('sequelize')
const db = require('../db')

const Appointment = db.define('appointment', {
  name: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.FLOAT
  }
})

module.exports = Appointment
