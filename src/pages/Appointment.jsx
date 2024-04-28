import AppointmentForm from '../components/AppointmentForm.jsx'
import Hero from '../components/Hero.jsx'

const Appointment = () => {
  return (
    <>
      <Hero title={"Schedule Your Appointment | SKMCH"} imageUrl={"/signin.png"}/>
      <AppointmentForm/>
    </>
  )
}

export default Appointment
