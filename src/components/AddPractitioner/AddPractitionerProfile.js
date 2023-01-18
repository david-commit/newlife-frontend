import React, { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddPractitioner.css';

function AddPractitionerProfile() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDOB] = useState('');
  const [location, setLocation] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [phone, setPhone] = useState('');
  let [bmi] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState([]);
  const [practitionerID, setPractitionerID] = useState('');
  const [practitioner, setPractitioner] = useState('');
  const [practitioners, setPractitioners] = useState([
    {
      id: 1,
      username: 'david',
      email: 'david@david.com',
      first_name: 'David',
      last_name: 'Ondiege',
      department: {
        id: 3,
        name: 'Cancer',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 2,
      username: 'johnathon',
      email: 'tracey@brown-rowe.net',
      first_name: 'Garfield',
      last_name: 'Kilback',
      department: {
        id: 2,
        name: 'Diabetes',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 3,
      username: 'johnie',
      email: 'manual.mueller@green.co',
      first_name: 'Inger',
      last_name: 'Dicki',
      department: {
        id: 2,
        name: 'Diabetes',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 4,
      username: 'marita.graham',
      email: 'tod_harris@prohaska-metz.net',
      first_name: 'Parker',
      last_name: 'Watsica',
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 5,
      username: 'wynona',
      email: 'lesia@bashirian-smitham.name',
      first_name: 'Garfield',
      last_name: 'Hartmann',
      department: {
        id: 3,
        name: 'Cancer',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 6,
      username: 'brittney.kling',
      email: 'claudio.hyatt@baumbach.org',
      first_name: 'Garth',
      last_name: 'Anderson',
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 7,
      username: 'joan_gulgowski',
      email: 'abram@koch.com',
      first_name: 'Berry',
      last_name: 'Cartwright',
      department: {
        id: 2,
        name: 'Diabetes',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 8,
      username: 'minh.rempel',
      email: 'herb_bode@kilback-heller.info',
      first_name: 'Paula',
      last_name: 'Lubowitz',
      department: {
        id: 2,
        name: 'Diabetes',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 9,
      username: 'elisa',
      email: 'minnie@hartmann.org',
      first_name: 'Coretta',
      last_name: 'Stamm',
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 10,
      username: 'shan',
      email: 'marlana@hilll.info',
      first_name: 'Isabell',
      last_name: 'Marks',
      department: {
        id: 3,
        name: 'Cancer',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 11,
      username: 'khalilah.langworth',
      email: 'hellen_swift@dickens.biz',
      first_name: 'Alpha',
      last_name: 'Vandervort',
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 12,
      username: 'charlesetta',
      email: 'marcene_stokes@west-metz.net',
      first_name: null,
      last_name: null,
      department: {
        id: 3,
        name: 'Cancer',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 13,
      username: 'Fridah',
      email: 'fridah@gmail.com',
      first_name: null,
      last_name: null,
      department: {
        id: 2,
        name: 'Diabetes',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 14,
      username: 'Anna',
      email: 'anna@gmail.com',
      first_name: null,
      last_name: null,
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
    {
      id: 15,
      username: 'mary',
      email: 'mary@gmail.com',
      first_name: null,
      last_name: null,
      department: {
        id: 1,
        name: 'Mental Health',
        description: null,
      },
      appointments: [],
      practitioner_profiles: [],
    },
  ]);

  // Fetch selected practitioner's profile
  useEffect(() => {
    fetch(`http://localhost:3000/practitioner_profiles/${practitionerID}`)
      .then((r) => r.json())
      .then((d) => setPractitioner(d));
  }, [practitionerID]);

  // Get user token
  const token = localStorage.getItem('token');

  // Handles Practitioner Profile data
  const handleFillProfileDetails = (data) => {
    fetch(`http://localhost:3000/patient_profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({
        practitioner_id: data.id,
        first_name: fName,
        last_name: lName,
        bio,
        dob,
        location,
        blood_group: bloodGroup,
        height,
        weight,
        phone_number: phone,
        bmi,
        job_title: jobTitle,
        image,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json(() => alert('Practitioner added successfully!'));
      } else {
        response.json().then((err) => {
          setErrors(err.errors);
          alert('Practitioner not added!');
        });
      }
    });
  };

  bmi = (weight / height / height).toFixed(1);

  return (
    <div className='add-practitioner-profile-main-container'>
      <AdminSidebar />
      <div className='add-practitioner-profile-container'>
        <h1>Add Practitioner Profile</h1>
        <br />
        <form onSubmit={handleFillProfileDetails}>
          <label>Select Practitioner</label>
          <select onChange={(e) => setPractitionerID(e.target.value)}>
            <option hidden>Select by Username | Email | Department</option>
            {practitioners?.map((prac) => {
              return (
                <option key={prac.id} value={prac.id}>
                  {prac.username} | {prac.email} | {prac.department.name}
                </option>
              );
            })}
          </select>
          <br />
          <label>Enter first name</label>
          <input
            type='text'
            placeholder='First name'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <br />
          <label>Enter last name</label>
          <input
            type='text'
            placeholder='Last name'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <br />
          <label>Enter Phone</label>
          <input
            type='tel'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>Enter Bio</label>
          <textarea
            type='text'
            placeholder='Provide more information about youself...'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <br />
          <label>Enter Date of Birth</label>
          <input
            type='date'
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <br />
          <label>Home Location</label>
          <input
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <label>Enter blood group</label>
          <input
            type='text'
            placeholder='Blood group'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <br />
          <label>Enter physical height (m)</label>
          <input
            type='number'
            placeholder='Height (cm)'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label>Enter weight (Kg)</label>
          <input
            type='number'
            placeholder='Weight (Kg)'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <label>BMI (Kg/m2)</label>
          <input
            disabled
            placeholder='0'
            value={bmi}
            // onChange={(e) => setBMI(e.target.value)}
          />
          {bmi > 0.01 && bmi < 18.5 ? (
            <p style={{ color: 'red' }}>Under Weight</p>
          ) : bmi > 18.5 && bmi < 24.9 ? (
            <p style={{ color: 'green' }}>Healthy</p>
          ) : bmi > 24.9 && bmi < 30 ? (
            <p style={{ color: 'orangered' }}>Over Weight</p>
          ) : bmi >= 30 ? (
            <p style={{ color: 'red' }}>Obsese</p>
          ) : (
            <p>Enter your height & weight</p>
          )}
          <br />
          <label>Enter Job Title</label>
          <input
            type='text'
            placeholder='e.g Clinical officer'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <br />
          <label>Enter Profile Image URL</label>
          <input
            type='url'
            placeholder='Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <button className='button-container' type='submit'>
            Submit
          </button>
        </form>
        <br />
        {Array.isArray(errors) && errors
          ? errors.map((error) => {
              return <li style={{ color: 'red' }}>{error}</li>;
            })
          : ''}
      </div>
    </div>
  );
}

export default AddPractitionerProfile;
