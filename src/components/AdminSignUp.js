import React, { useState } from 'react'
import './AdminGetInPage.css'
import axios from 'axios';

function AdminSignUp() {
  const [adminDetails, setAdminDetails] = useState({
    empld: '',
    empName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint
      const response = await axios.post('http://localhost:8080/api/admins/signup', adminDetails);
      console.log(response.data); // Handle response from server
      if (response.status === 200) {
        alert("Hey " + response.data.empName + "! Thank you for signing up with us. ")
        window.location.href = '/admin';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form:' + error)
    }
  };
  return (
    <div className='login-box'>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            id="empld"
            name="empld"
            value={adminDetails.empld}
            onChange={handleChange}
            required
          />
          <label htmlFor="empld">Employee ID</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="empName"
            name="empName"
            value={adminDetails.empName}
            onChange={handleChange}
            required
          />
          <label htmlFor="empName">Employee Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            id="email"
            name="email"
            value={adminDetails.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            id="password"
            name="password"
            value={adminDetails.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={adminDetails.contactNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="contactNumber">Contact Number</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="address"
            name="address"
            value={adminDetails.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AdminSignUp