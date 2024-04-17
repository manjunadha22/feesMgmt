import React, { useState } from 'react'
import './AdminGetInPage.css'
import axios from 'axios';
import validator from 'validator';
import parse from 'html-react-parser';

function AdminSignUp() {
  const [adminDetails, setAdminDetails] = useState({
    empld: '',
    empName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: ''
  });
  const [showSubmit, SetShowSubmit] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      validate(e.target.value)
    }
    setAdminDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      setErrorMessage('');
      SetShowSubmit(true)
    } else {
      SetShowSubmit(false)
      setErrorMessage(parse(`Your password must contain 8 characters <br> Your password mush have atleast one digit ('0' - '9') <br> Password must have atleast one uppercase letter ('A'-'Z') <br> Your password must have atlest one special character`));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint
      const response = await axios.post('http://localhost:8081/api/admins/signup', adminDetails);
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="user-box">
          <input
            type="text"
            id="empld"
            name="empld"
            value={adminDetails.empld}
            autoComplete="false"
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
            autoComplete="false"
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
            autoComplete="false"
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
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <br />
          {errorMessage === '' ? null : (
            <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessage}</span>
          )}
        </div>
        <div className="user-box">
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={adminDetails.contactNumber}
            autoComplete="false"
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
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label>
          <br />
          {errorMessage === '' ? null : (
            <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessage}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AdminSignUp