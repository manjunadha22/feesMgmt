import axios from 'axios';
import React, { useContext, useState } from 'react'
import { DeptContext } from './DeptContext';
import validator from 'validator';
import parse from 'html-react-parser';


function StudentSignup() {
  const { dept, setDept } = useContext(DeptContext)
  const [errorMessage, setErrorMessage] = useState('');
  const [showSubmit, SetShowSubmit] = useState(false)
  const [studentDetails, setStudentDetails] = useState({
    rollnumber: '',
    studentName: '',
    department: dept,
    semester: '',
    email: '',
    password: '',
    contactNumber: '',
    address: ''
  });

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

  const handleChange = (e) => {

    const { name, value } = e.target;
    console.log(name)
    if (name === "password") {
      validate(e.target.value)
    }
    setStudentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint
      const response = await axios.post('http://localhost:8081/api/students/signup', studentDetails);
      console.log(response.data); // Handle response from server
      if (response.status === 200) {
        alert("Hey " + response.data.studentName + "! Thank you for signing in. ")
        window.location.href = '/student';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form:' + error)
    }
  };
  return (
    <div className="login-box">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="user-box">
          <input
            type="text"
            id="rollnumber"
            name="rollnumber"
            value={studentDetails.rollnumber}
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="rollnumber">Roll Number</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentDetails.studentName}
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="studentName">Student Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="department"
            name="department"
            value={dept}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="studentName">Department Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="branch"
            name="branch"
            value={studentDetails.branch}
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="branch">Branch</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="semester"
            name="semester"
            value={studentDetails.semester}
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="branch">Semester</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            id="email"
            name="email"
            value={studentDetails.email}
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
            value={studentDetails.password}
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
            value={studentDetails.contactNumber}
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
            value={studentDetails.address}
            autoComplete="false"
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address</label>
        </div>
        {showSubmit && <button type="submit">Submit</button>}
      </form>
    </div>
  )
}

export default StudentSignup