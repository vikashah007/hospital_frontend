import React from 'react'
import AppointmentForm from '../components/AppointmentForm.jsx'
import Hero from '../components/Hero.jsx'

const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule Your Appointment | SKMCH"} imageUrl={"/signin.png"}/>
      <AppointmentForm/>
    </div>
  )
}

export default Appointment
