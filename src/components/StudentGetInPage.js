import React, { useContext, useState } from 'react'
import './AdminGetInPage.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { FormContext } from './FormContext';
import validator from 'validator';
import parse from 'html-react-parser';

function StudentGetInPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(FormContext)
  const [errorMessage, setErrorMessage] = useState('');
  const [showSubmit, SetShowSubmit] = useState(false)
  const { student, setStudent } = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState(false)
  const [adminDetails, setAdminDetails] = useState({
    email: '',
    password: ''
  });


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
      const response = await axios.post('http://localhost:8081/api/students/signin', adminDetails);
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
      <form onSubmit={handleSubmit} autoComplete="off">


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
        {errorMsg && <p>Invalid Credentials</p>}

        <button type="submit">Submit</button>
      </form>
      <p>Don't have an accout? <Link to="/studentSignup"><button>Sign Up</button></Link></p>
    </div>
  )
}

export default StudentGetInPage