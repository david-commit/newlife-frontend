import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Link, useHistory} from 'react-router-dom'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AllPractitioners.css';
import AllPractitionersPagination from './AllPractitionersPagination';

const AllPractitioners = ({loggedIn, userType}) => {
  const [users,setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [practitionersPerPage] = useState(15);
  
  // Get current practitioners for pagination
  const indexOfLastPractitioner = currentPage * practitionersPerPage;
  const indexOfFirstPractitioner = indexOfLastPractitioner - practitionersPerPage;
  const currentPractitioners = users.slice(
    indexOfFirstPractitioner,
    indexOfLastPractitioner
  );
  
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

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = async () =>{
    const result = await axios.get("http://localhost:3000/users");
    setUsers(result.data);
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loadUser();
  };
  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='all-practitioners-container'>
    <h1>All Practitioners</h1>
    <br/>
    <section>
    <input
    placeholder='Search'
    type='search'

    />
    <Link to="/admin/add-practitioner">
    <button>+ Add Practitioner</button>
    </Link>
    </section>
    <br/>
      <table>

  <thead>
    <tr>
      {/* <th scope="col">Auto</th> */}
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Speciality</th>
      <th scope="col">Department</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {currentPractitioners.map((user,index)=>(
      <tr>
        {/* <td scope="row"><strong>{index + 1}</strong></td> */}
        <td><strong>{user.id}</strong></td>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.speciality}</td>
        <td>{user.department}</td>
        <td><Link id="td-edit-icon" className="btn btn-primary m-2" to={`/admin/practitioner/edit/${user.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link></td>
        <td><Link id="td-delete-icon" className="btn btn-danger" onClick={() => deleteUser(user.id)}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
      </tr>

    ))}
  </tbody>
</table>
{console.log(users)}
<AllPractitionersPagination practitionersPerPage={practitionersPerPage}
        practitioners={users}
        paginate={paginate}
        currentPage={currentPage}/>
      </div>
    </div>
  );
}

export default AllPractitioners;
