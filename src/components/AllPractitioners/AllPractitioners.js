import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AllPractitioners.css';
import AllPractitionersPagination from './AllPractitionersPagination';

const AllPractitioners = ({ loggedIn, userType }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [practitionersPerPage, setCurrentPrcatitioners] = useState(15);
  const [searchQuery, setSearchQuery] = useState('');

  // Get current practitioners for pagination
  const indexOfLastPractitioner = currentPage * practitionersPerPage;
  const indexOfFirstPractitioner =
    indexOfLastPractitioner - practitionersPerPage;
  const currentPractitioners = users.slice(
    indexOfFirstPractitioner,
    indexOfLastPractitioner
  );

  const history = useHistory();

  if (loggedIn) {
    if (userType == 'practitioner') {
      history.push('/practitioners/me');
    } else if (userType == 'patient') {
      history.push('/patients/me');
    }
  } else {
    history.push('/login');
  }

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      'http://localhost:3000/practitioner_profiles'
    );
    setUsers(result.data);
    setSearchQuery(result.data);
  };

  // Handle search feature
  const handleSearch = (e) => {
    setUsers(
      searchQuery.filter((prac) => {
        return (prac.first_name + prac.last_name)
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
    return currentPractitioners;
  };
  // console.log(currentPractitioners)

  // Get user token
  const token = localStorage.getItem('token');

  // Get user data
  const userData = localStorage.getItem('person');
  const adminId = JSON.parse(userData).id;

  // Handle Delete Practitioner
  const handleDeletePractitioner = (deletedPrac) => {
    fetch(
      `http://localhost:3000/admins/${adminId}/products/${deletedPrac.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
          Accept: '*/*',
        },
      }
    ).then((result) => {
      if (result.ok) {
        setUsers((users) => {
          return users.filter((user) => user.id != deletedPrac.id);
        });
      }
    });
  };

  return (
    <div className='all-practitioners-main-container'>
      <AdminSidebar />
      <div className='all-practitioners-container'>
        <h1>All Practitioners</h1>
        <br />
        <section>
          <input placeholder='Search' type='search' onChange={handleSearch} />
          <Link to='/admin/add-practitioner'>
            <button>+ Add Practitioner</button>
          </Link>
        </section>
        <br />
        <table>
          <thead>
            <tr>
              {/* <th scope="col">Auto</th> */}
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Department</th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentPractitioners.map((user, index) => (
              <tr key={index}>
                <td>
                  <strong>{index + 1}</strong>
                </td>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td id='centered-cell'>{user.practitioner.username}</td>
                <td id='centered-cell'>{user.practitioner.email}</td>
                <td id='centered-cell'>{user.phone_number}</td>
                <td id='centered-cell'>{user.practitioner.department.name}</td>
                <td id='centered-cell'>
                  <Link
                    id='td-edit-icon'
                    className='btn btn-primary m-2'
                    to={`/admin/practitioner/edit/${user.id}`}
                  >
                    <i class='fa fa-pencil' aria-hidden='true'></i>
                  </Link>
                </td>
                <td id='centered-cell'>
                  <i
                    class='fa fa-trash'
                    aria-hidden='true'
                    id='td-delete-icon'
                    onClick={() => handleDeletePractitioner(user)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {console.log(users)} */}
        <AllPractitionersPagination
          practitionersPerPage={practitionersPerPage}
          practitioners={users}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default AllPractitioners;
