import React, { useContext, useState } from 'react'
import './AdminGetInPage.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import { UserContext } from './UserContext';

function AdminGetInPage() {
  const { user, setUser } = useContext(FormContext)

  const { student, setStudent } = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState(false)
  const navigate = useNavigate();
  const [adminDetails, setAdminDetails] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('http://localhost:8081/api/admins/signin', adminDetails);
      console.log(response.data); // Handle response from server
      setErrorMsg(false)
      if (response.status === 200) {


        alert("Hey " + response.data.empName + "! You have been signed in successfully ")
        setStudent("")
        setUser(response.data.empName)

        navigate('/adminHome', { state: { name: response.data } });

        // window.location.href = '/studentHome';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg(true)
    }
  };

  return (
    <div className="login-box">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>


        <div className="user-box">

          <input
            type="email"
            id="email"
            name="email"
            value={adminDetails.email}
            autoComplete="off"
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
            autoComplete="off"
            value={adminDetails.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit">Submit</button>
        {errorMsg && <p>Invalid Credentials</p>}
      </form>
      <p>Don't have an accout? <Link to="/adminSignup"><button>Sign Up</button></Link></p>
    </div>
  )
}

export default AdminGetInPage