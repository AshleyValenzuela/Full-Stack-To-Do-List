const router = require('express').Router()
const {Appointment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const appointments = await Appointment.findAll()
    res.json(appointments)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newAppointment = await Appointment.create(req.body)
    res.json(newAppointment)
  } catch (err) {
    next(err)
  }
})

router.put(':/appointmentId', async (req, res, next) => {
  try {
    const updatedAppointment = await Appointment.update({
      where: {
        id: req.params.appointmentId
      }
    })
    res.json(updatedAppointment)
  } catch (err) {
    next(err)
  }
})

router.delete(':/appointmentId', async (req, res, next) => {
  try {
    await Appointment.destroy({
      where: {
        id: req.params.appointmentId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
