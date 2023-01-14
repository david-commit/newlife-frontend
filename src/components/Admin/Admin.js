import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

const AllPractitioners = ({loggedIn, userType}) => {
const [users,setUsers] = useState([]);
  const history = useHistory()

  if (loggedIn) {
    if (userType == "practitioner") {
      history.push('/practitioners/me')
    } else if (userType == "patient") {
      history.push('/patients/me')
    }
  } else {
    history.push('/login')
  }

  console.log("usertype: ", userType)


useEffect(()=>{
  console.log("Newlife Hospital");
},[]);
const loadUser = () =>{
  const result = axios.get("http://localhost:3000/Practitioners");
  setUsers(result.data);
}
  return (
    <div>
      <table class="table">
  <thead>
    <tr className="bg-dark">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    
  )
}

export default AllPractitioners;