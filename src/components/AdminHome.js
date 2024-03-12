import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AdminHome.css";
import axios from "axios";

function AdminHome() {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const data = location.state.name;
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [updatedStudentData, setUpdatedStudentData] = useState({
    studentName: "",
    email: "",
    branch: "",
    contactNumber: "",
    address: ""
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/api/students/allstudents")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  };
  //   const handleUpdate = (student) => {
  //     // setSelectedStudent(student);
  //     // setUpdatedStudentData({
  //     //   studentName: student.studentName,
  //     //   email: student.email,
  //     //   branch: student.branch,
  //     //   contactNumber: student.contactNumber,
  //     //   address: student.address
  //     // });
  //     document.getElementById('#updateModal').modal('show'); // Show the Bootstrap modal
  //   };
  const handleSaveChanges = () => {
    axios.patch(`http://localhost:8080/api/students/${selectedStudent.rollnumber}`, updatedStudentData)
      .then((res) => {
        console.log("Student updated successfully:", res.data);
        fetchStudents(); // Fetch students again to reflect the changes
      })
      .catch((error) => {
        console.error("Error updating student:", error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudentData({ ...updatedStudentData, [name]: value });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/students/${id}`)
      .then((res) => {
        console.log("Student deleted successfully");
        fetchStudents(); // Fetch students again to reflect the changes
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };
  return (
    <div>
      <h1>Welcome {data.empName}</h1>
      <p>As a admin you can manage all students data</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* @Entity
public class Student {
	
	@Id
	private Long rollnumber;
	private String studentName;
	@Column(unique=true)
	private String email;
	private String password;
	private String branch;
	private Long contactNumber;
	private String address; */}
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollnumber}</td>
              <td>{student.studentName}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>
              <td>{student.contactNumber}</td>
              <td>{student.address}</td>
              <td>
                <button data-bs-toggle="modal"
                  data-bs-target="#exampleModal" className="btn btn-success">Update</button>
              </td>
              <td>
                <button className="btn btn-warning" onClick={() => handleDelete(student.rollnumber)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Student</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="studentName">Name</label>
                  <input type="text" className="form-control" id="studentName" name="studentName" value={updatedStudentData.studentName} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={updatedStudentData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="branch">Branch</label>
                  <input type="text" className="form-control" id="branch" name="branch" value={updatedStudentData.branch} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={updatedStudentData.contactNumber} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" name="address" value={updatedStudentData.address} onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
