import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const { isAuthenticated, setIsauthenticated } = useContext(Context);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctorfirstname, setDoctorFirstName] = useState("");
  const [doctorlastname, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState("");
  const [doctors, setDoctors] = useState([]);

  const departmentArray = [
    "Pediatrics",
    "Orthopedics",
    "cardiology",
    "Neurology",
    "Oncology",
    "RadioLogy",
    "Physical Therapy",
    "Dermatology",
    "ENT",
    "MBBS"
  ];

const navigateTo=useNavigate()

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://hospital-management-backend-dut4.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  });

  const handleAppointment = async (e) => {
    e.preventDefault();
   
    try {
        const hasVisitedBool = Boolean(hasVisited);
        const { data } = await axios.post(
          "https://hospital-management-backend-dut4.onrender.com/api/v1/appointment/post",
          {
            firstname,
            lastname,
            email,
            phone,
            nic,
            dob,
            gender,
            appointment_Date: appointmentDate,
            department,
            doctor_firstname: doctorfirstname,
            doctor_lastname: doctorlastname,
            hasVisited: hasVisitedBool,
            address,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success(data.message);
        navigateTo("/")
        setFirstName(""),
          setLastName(""),
          setEmail(""),
          setPhone(""),
          setNic(""),
          setDob(""),
          setGender(""),
          setAppointmentDate(""),
          setDepartment(""),
          setDoctorFirstName(""),
          setDoctorLastName(""),
          setHasVisited(""),
          setAddress("");
      } catch (error) {
        toast.error(error.response.data.message);
      }
}

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>

        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date Of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              value={appointmentDate}
              placeholder="Appointment Date"
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setFirstName("");
                setLastName("");
              }}
            >
              {departmentArray.map((depart, index) => {
                return (
                  <option key={index} value={depart}>
                    {depart}
                  </option>
                );
              })}
            </select>

            <select value={`${doctorfirstname} ${doctorlastname}`} onChange={(e)=>{
                const[firstname,lastname]=e.target.value.split(" ")
                setDoctorFirstName(firstname)
                setDoctorLastName(lastname)
            }} disabled={!department}>
            <option value="">Select Doctor</option>
            {
                doctors.filter(doctor=>doctor.doctorDepartment===department).map((doctor,index)=>{return(
                    <option value={`${doctor.firstname} ${doctor.lastname}`} key={index}>{doctor.firstname}{doctor.lastname}</option>
                )})
            }
            </select>

          </div>
          <textarea rows={10} value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Address"></textarea>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: "0" }}>Have You Visited Before ?</p>
           <input type="checkbox" checked={hasVisited} onChange={(e)=>{setHasVisited(e.target.checked)}} style={{width:"25px", flex:"none"}}/>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Get Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
