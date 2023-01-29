import React, {useState} from 'react';
import './Patient.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';
import PatientDetailsPopup from '../PatientDetailsPopup/PatientDetailsPopup';
import { useHistory } from 'react-router-dom';

function Patient({loggedIn, userType}) {
  const person = JSON.parse(localStorage.getItem("person") || false)
  const [modalOpen, setModalOpen] = useState(false)
  const [personDetails, setPersonDetails] = useState(person?.["patient_profiles"]?.[0] ||
  {
    phone_number: "",
    dob: "",
    bio: "",
    height: "",
    weight: "",
    bmi: "",
    blood_group: "",
    first_name: "",
    last_name: ""
  }
  )
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "admin") {
      history.push('/admin/me')
    }
  }else{
    history.push('/login')
  }

  function handleEditDetailsClick(){
    setModalOpen(true)
  }

  return (
    <>
      <div className='patient-main-container'>
        <PatientSidebar />
        <div className='patient-details-dash-section'>
          <h1>{`Hi ${personDetails?.first_name}`}</h1>
          <p>See your personal details below</p>
          <br />
          <div className='patient-details-section'>
            <p className='patient-details-title'>
              <span>Bio:</span>
            </p>
            <div className='patient-details-bio'>
              {personDetails?.bio}
            </div>
            <br />
            <p className='practitioner-details-title'>
              <span>Date of Birth: </span>
              {personDetails?.dob}
            </p>
            <p className='practitioner-details-title'>
              <span>Phone: </span>
              {personDetails?.phone_number}
            </p>
            <p className='practitioner-details-title'>
              <span>Email: </span>
              {JSON.parse(localStorage.getItem("person"))?.email}
            </p>
            {/* <p className='practitioner-details-title'>
              <span>Location:</span>
              Nairobi
            </p>
            <p className='practitioner-details-title'>
              <span>Age:</span>
              35
            </p>
            */}
            <p className='practitioner-details-title'>
              <span>Height: </span>{`${personDetails?.height} meters`}
            </p>
            <p className='practitioner-details-title'>
              <span>Weight: </span>
              {`${personDetails?.weight}Kg`}
            </p>
            <p className='practitioner-details-title'>
              <span>BMI: </span>
              {Math.round(personDetails?.weight * 100/ (personDetails?.height)**2)/100}
            </p>
            <p className='practitioner-details-title'>
              <span>Blood Group: </span>
              {personDetails?.blood_group}
            </p>

            <button className='edit-personal-details' onClick={handleEditDetailsClick}>Edit Details</button>
          </div>
        </div>
        <div className='patient-details-notification-section'>
          <h2>Notifications</h2>
          <div className='patient-details-notification'>
            <h4>Upcomming appointment (in 2hrs)</h4>
            <p>Dr. Grace Laura (Nutrionist)</p>
            
          </div>
          <div className='patient-details-notification'>
            <h4>Upcomming appointment (in 3hrs)</h4>
            <p>Dr. Laura Grace(Nutritionist)</p>
            
          </div>
          <div className='patient-details-notification'>
            <h4>Upcomming appointment (in 3hrs)</h4>
            <p>Dr. Laura Grace(Nutritionist)</p>
            
          </div>
        </div>
      </div>
      {
        modalOpen ?
        <PatientDetailsPopup
            loggedIn={loggedIn}
            userType={userType}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            personDetails={personDetails}
            setPersonDetails={setPersonDetails}/> : ""
      }
      
    </>
  );
}

export default Patient;
