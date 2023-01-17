import React, {useState} from 'react';
import './Practitioner.css';
import { useHistory } from 'react-router-dom';
import PractitionerSideBar from '../PractitionerSideBar/PractitionerSideBar';
import PatientDetailsPopup from '../PractitionerDetailsPopup/PractitionerDetailsPopup';

function Practitioner({loggedIn, userType}) {
  const person = JSON.parse(localStorage.getItem("person") || false)
  const [modalOpen, setModalOpen] = useState(false)
  const [personDetails, setPersonDetails] = useState(person?.["practitioner_profiles"]?.[0] ||
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
      <div className='practitioner-main-container'>
        <PractitionerSideBar />
        <div className='practitioner-details-dash-section'>
          <h1>{`Hi ${personDetails?.first_name}`}</h1>
          <p>See your personal details below</p>
          <br />
          <div className='practitioner-details-section'>
            <p className='practitioner-details-title'>
              <span>Bio:</span>
            </p>
            <div className='practitioner-details-bio'>
              {personDetails?.bio}
            </div>
            <br />
            <p className='practitioner-details-title'>
              <span>Job Title: </span>
              {personDetails?.job_title}
            </p>
            <p className='practitioner-details-title'>
              <span>Department: </span>
              {person?.department?.name}
            </p>
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
        <div className='practitioner-details-notification-section'>
          <h2>Notifications</h2>
          <div className='practitioner-details-notification'>
            <h4>Upcomming appointment (in 2hrs)</h4>
            <p>Dr. Grace Laura (Nutrionist)</p>
            
          </div>
          <div className='practitioner-details-notification'>
            <h4>Upcomming appointment (in 3hrs)</h4>
            <p>Dr. Laura Grace(Nutritionist)</p>
            
          </div>
          <div className='practitioner-details-notification'>
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

export default Practitioner;
