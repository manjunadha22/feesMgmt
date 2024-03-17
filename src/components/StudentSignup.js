import axios from 'axios';
import React, { useContext, useState } from 'react'
import { DeptContext } from './DeptContext';

function StudentSignup() {
  const { dept, setDept } = useContext(DeptContext)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint
      const response = await axios.post('http://localhost:8080/api/students/signup', studentDetails);
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
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            id="rollnumber"
            name="rollnumber"
            value={studentDetails.rollnumber}
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
            value={studentDetails.contactNumber}
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

export default StudentSignup