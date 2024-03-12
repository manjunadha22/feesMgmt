import React, { useContext, useState } from 'react'
import './AdminGetInPage.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { FormContext } from './FormContext';

function StudentGetInPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(FormContext)
  const { student, setStudent } = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState(false)
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
      const response = await axios.post('http://localhost:8080/api/students/signin', adminDetails);
      console.log(response.status); // Handle response from server
      setErrorMsg(false)
      if (response.status === 200) {


        alert("Hey " + response.data.studentName + "! You have been signed in successfully ")
        setUser("")
        setStudent(response.data.studentName)

        navigate('/studentHome', { state: { name: response.data } });

        // window.location.href = '/studentHome';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg(true);
    }
  };
  return (
    <div className="login-box">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>


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
        {errorMsg && <p>Invalid Credentials</p>}

        <button type="submit">Submit</button>
      </form>
      <p>Don't have an accout? <Link to="/studentSignup"><button>Sign Up</button></Link></p>
    </div>
  )
}

export default StudentGetInPage