import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AdminHome.css";
import axios from "axios";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";

function AdminHome() {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const data = location.state.name;
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [clickedOnSubmit, setClickedOnSubmit] = useState(false);
  const tableRef = useRef(null);
  // const [clickedOnSubmit, setClickedOnSubmit] = useState(false)
  // const [searchesStudent,/ setSearchedStudent] = useState()
  let rollnumber;
  // let searchesStudent;

  const [searchesStudent, setSearchesStudent] = useState({
    rollnumber: "",
    studentName: "",
    department: "",
    semester: 0,
    email: "",
    branch: "",
    contactNumber: "",
    address: "",
    paymentStatus: '',
    paidDate: "",
    tutionFees: 0,
    examFees: 0,
    paidAmountOfTutionFees: 0,
    paidAmountOfExamFees: 0,
    dueOfTutionFees: 0,
    dueOfExamFees: 0
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    console.log(searchesStudent.rollnumber)
    axios
      .get("http://localhost:8081/api/students/allstudents")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  };


  const getOneStudent = async () => {
    setClickedOnSubmit(true);
    const roll = document.getElementById('rollnumber').value;
    await axios.get(`http://localhost:8081/api/students/oneStudent/${roll}`).then((res) => {
      console.log(res.data.rollnumber);
      rollnumber = res.data.rollnumber
      // setSearchedStudent(res.data);
      searchesStudent.rollnumber = res.data.rollnumber
      searchesStudent.studentName = res.data.studentName
      searchesStudent.department = res.data.department
      searchesStudent.semester = res.data.semester
      searchesStudent.email = res.data.email
      searchesStudent.branch = res.data.branch
      searchesStudent.contactNumber = res.data.contactNumber
      searchesStudent.address = res.data.address
      searchesStudent.paymentStatus = res.data.paymentStatus
      searchesStudent.paidDate = res.data.paidDate
      searchesStudent.tutionFees = res.data.tutionFees
      searchesStudent.examFees = res.data.examFees
      searchesStudent.paidAmountOfTutionFees = res.data.paidAmountOfTutionFees
      searchesStudent.paidAmountOfExamFees = res.data.paidAmountOfExamFees
      searchesStudent.dueOfTutionFees = res.data.dueOfTutionFees
      searchesStudent.dueOfExamFees = res.data.dueOfExamFees
    })
    console.log(fetchStudents())
  }
  const handleAll = () => {
    setClickedOnSubmit(false)
  }
  const generatePDF = async () => {
    try {
      const canvas = await html2canvas(tableRef.current);
      const image = canvas.toDataURL('image/png', 1.0);

      // You can now save or display the image as needed
      // For example, download the image:
      const link = document.createElement('a');
      link.href = image;
      link.download = 'student-details.png';
      link.click();
    } catch (error) {
      console.error('Error converting table to image:', error);
    }
  }
  return (
    <div>
      <h1>Welcome {data.empName}</h1>
      <p>As a admin you can manage all students data</p>
      <div className="ui__left">
        <form action="">
          <input type="text" placeholder='Enter Student rollnumber' id='rollnumber' onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              getOneStudent();
            }
          }} required />

          <abbr title='Submit NPI'><ArrowCircleRightIcon onClick={getOneStudent} /></abbr>

        </form>
        <button onClick={handleAll}>Show All Students</button>
      </div>
      {!clickedOnSubmit && <><table className="table table-striped" ref={tableRef}>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Student Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Tution Fees</th>
            <th>Exam Fees</th>
            <th>Paid Amount of tution fees</th>
            <th>Paid Amount of exam fees</th>
            <th>Due of tution fees</th>
            <th>Due of exam fees</th>
            <th>Payment Status</th>
            <th>paid</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollnumber}</td>
              <td>{student.studentName}</td>
              <td>{student.department}</td>
              <td>{student.semester}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>
              <td>{student.contactNumber}</td>
              <td>{student.address}</td>
              <td>{student.tutionFees}</td>
              <td>{student.examFees}</td>
              <td>{student.paidAmountOfTutionFees}</td>
              <td>{student.paidAmountOfExamFees}</td>
              <td>{student.dueOfTutionFees}</td>
              <td>{student.dueOfExamFees}</td>
              <td>{student.paymentStatus}</td>
              <td>{student.paidDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <button className="printBtn" onClick={generatePDF}>
          print student details
        </button></>}
      {
        clickedOnSubmit && <><table className="table table-striped" ref={tableRef}>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Tution Fees</th>
              <th>Exam Fees</th>
              <th>Paid Amount of tution fees</th>
              <th>Paid Amount of exam fees</th>
              <th>Due of tution fees</th>
              <th>Due of exam fees</th>
              <th>Payment Status</th>
              <th>paid</th>
            </tr>
          </thead> <tbody>
            <tr>
              {/* {searchesStudent} */}
              <td>{searchesStudent.rollnumber}</td>
              <td>{searchesStudent.studentName}</td>
              <td>{searchesStudent.department}</td>
              <td>{searchesStudent.semester}</td>
              <td>{searchesStudent.email}</td>
              <td>{searchesStudent.branch}</td>
              <td>{searchesStudent.contactNumber}</td>
              <td>{searchesStudent.address}</td>
              <td>{searchesStudent.tutionFees}</td>
              <td>{searchesStudent.examFees}</td>
              <td>{searchesStudent.paidAmountOfTutionFees}</td>
              <td>{searchesStudent.paidAmountOfExamFees}</td>
              <td>{searchesStudent.dueOfTutionFees}</td>
              <td>{searchesStudent.dueOfExamFees}</td>
              <td>{searchesStudent.paymentStatus}</td>
              <td>{searchesStudent.paidDate}</td>
            </tr>
          </tbody>
        </table><button className="printBtn" onClick={generatePDF}>print</button></>
      }
    </div>
  );
}

export default AdminHome;
