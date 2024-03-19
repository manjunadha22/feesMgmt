import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useLocation } from "react-router-dom";
import "./StudentHome.css";
import axios from "axios";
import jsPDF from "jspdf";
import { DeptContext } from "./DeptContext";

function StudentHome() {
  const { dept, setDept } = useContext(DeptContext)
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  const [totalAmountE, setTotalAmountE] = useState(0);
  const [amountPaidE, setAmountPaidE] = useState(0);
  const [balance, setBalance] = useState(0);
  const [balanceE, setBalanceE] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  // const { student } = useContext(UserContext);
  const location = useLocation();
  const [feeType, setFeeType] = useState("");
  const [sem, setSem] = useState("");
  const [showTutionFields, setShowTutionFields] = useState(false);
  const [showExamFields, setShowExamFields] = useState(false);

  const handleSem = (e) => {
    setSem(e.target.value)
  }

  const handleFeeTypeChange = (event) => {
    const selectedOption = event.target.value;

    setFeeType(selectedOption);

    if (selectedOption === "Tution Fees") {
      setShowTutionFields(true);
      setShowExamFields(false);
      setTotalAmount(15000);
      setAmountPaid(0);
      console.log(totalAmount, amountPaid)
      setBalance(totalAmount - amountPaid);
    } else if (selectedOption === "Exam Fees") {
      console.log("hello");
      setShowTutionFields(false);
      setShowExamFields(true);
      setTotalAmountE(1200);
      setAmountPaidE(0);
      setBalanceE(totalAmountE - amountPaidE);
    } else {
      setShowTutionFields(false);
      setShowExamFields(false);
    }
  };
  const data = location.state.name;
  let dataa;
  useEffect(() => {
    axios.get(`http://localhost:8081/api/students/getStudent/${data.rollnumber}`).then((res) => {

      dataa = res.data
    });
    console.log(dataa)
  }, [])
  const [studentDetails, setStudentDetails] = useState({
    rollnumber: data.rollnumber,
    studentName: data.studentName,
    department: data.department,
    branch: data.branch,
    semester: data.semester,
    email: data.email,
    password: data.password,
    contactNumber: data.contactNumber,
    address: data.address,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let studentName = data.studentName;
  const receipt = studentName + data.contactNumber.toString().substring(1, 5);
  const rollnumber = data.rollnumber;
  const handlePayButtonClick = () => {
    axios.patch(`http://localhost:8081/api/students/updatePayment/${data.rollnumber}`, studentDetails);
    const amountToPay = parseFloat(prompt("Enter the amount to pay:", "0"));
    if (!isNaN(amountToPay)) {
      setPaymentAmount(amountToPay);
    }
    setAmountPaid(amountToPay);
    setBalance(totalAmount - amountToPay);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      console.log(studentDetails);
      const response = await axios.patch(
        `http://localhost:8081/api/students/update/${data.rollnumber}`,
        studentDetails,
        { headers }
      );

      console.log(response.data); // Handle response from server
      if (response.status === 200) {
        alert(
          "Hey " + response.data.studentName + "Your data has been updated"
        );
        window.location.href = "/studentHome";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert('Error submitting form:'+ error)
    }
  };
  const generateReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(
      `SV University ${showTutionFields ? "Tution Fees" : "Exam Fees"}`,
      20,
      20
    );
    doc.setFontSize(16);
    doc.text(`Receipt No: ${receipt}`, 20, 30);
    doc.text(`Student Name: ${studentName}`, 20, 40);
    doc.text(`Roll Number: ${rollnumber}`, 20, 50);
    doc.text(`Department: ${dept}`, 20, 60);

    doc.text(`Semester: ${sem}`, 20, 70);
    doc.text(`Fee Type: ${feeType}`, 20, 80);
    doc.text(`Total Amount to Pay: ${totalAmount}`, 20, 90);
    doc.text(`Paid Amount: ${amountPaid}`, 20, 100);
    doc.text(`Due: ${balance}`, 20, 110);
    doc.text(`Email Address: ${data.email}`, 20, 120);
    doc.text(`Branch: ${data.branch}`, 20, 130);
    doc.text(`Contact Number: ${data.contactNumber}`, 20, 140);
    doc.text(`Contact Number: ${data.paymentStatus}`, 20, 150);
    doc.text(`Contact Number: ${data.paidDate}`, 20, 160);

    // Save the PDF
    doc.save("Receipt.pdf");
    alert("Your receipt has been downloaded you can check that");
  };
  return (
    <div className="hello">
      <h1>Hi {studentName}! Welcome to SV University Fees Portal</h1>
      <table className="table table-striped">
        <tr>
          <td>Receipt No.</td>
          <td>
            <input type="text" value={receipt} />
          </td>
        </tr>
        <tr>
          <td>Student Name:</td>
          <td>
            <input type="text" value={studentDetails.studentName} />
          </td>
        </tr>
        <tr>
          <td>Roll Number:</td>
          <td>
            <input type="text" value={studentDetails.rollnumber} />
          </td>
        </tr>
        <tr>
          <td>Department:</td>
          <td>
            <input type="text" value={studentDetails.department} />
          </td>
        </tr>
        <tr>
          <td>Semester: </td>
          <td>

            <select value={sem} onChange={handleSem}>
              <option value="">Select Semester</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="I">III</option>
              <option value="II">IV</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <input type="text" value={studentDetails.address} />
          </td>
          <td>
            <select value={feeType} onChange={handleFeeTypeChange}>
              <option value="">Select Fees Type</option>
              <option value="Tution Fees">Tution Fees</option>
              <option value="Exam Fees">Exam Fees</option>
            </select>

            {showTutionFields && (
              <div>
                <h3>Tution Fees Details</h3>
                <label>
                  Total Amount to pay: <input type="text" value={totalAmount} />
                </label>
                <label>
                  Paid amount: <input type="text" value={amountPaid} />
                </label>
                <label>
                  Due: <input type="text" value={balance} />
                </label>
                <button onClick={handlePayButtonClick}>Pay</button>
                {paymentAmount > 0 && (
                  <div>
                    <h4>You have paid: {paymentAmount}</h4>
                  </div>
                )}
              </div>
            )}

            {showExamFields && (
              <div>
                <h3>Exam Fees Details</h3>
                <label>
                  Total Amount to pay: <input type="text" value={totalAmountE} />
                </label>
                <label>
                  Paid amount: <input type="text" value={amountPaidE} />
                </label>
                <label>
                  Due: <input type="text" value={balanceE} />
                </label>
                <button onClick={handlePayButtonClick}>Pay</button>
                {paymentAmount > 0 && (
                  <p className="output">You have paid: {paymentAmount}</p>
                )}
              </div>
            )}
          </td>
        </tr>
        <tr>
          <td>Email Address:</td>
          <td>
            <input type="text" value={data.email} />
          </td>
        </tr>
        <tr>
          <td>Branch:</td>
          <td>
            <input type="text" value={data.branch} />
          </td>
        </tr>
        <tr>
          <td>Contact Number:</td>
          <td>
            <input type="text" value={data.contactNumber} />
          </td>
        </tr>
      </table>
      <button
        type="button"
        class="btn btn-primary edit"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Details
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="user-box">
                  <label htmlFor="rollnumber">Roll Number: </label>
                  <input
                    type="text"
                    id="rollnumber"
                    name="rollnumber"
                    value={data.rollnumber}
                    onChange={handleChange}
                    readOnly={false}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="studentName">Student Name: </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    defaultValue={studentName}
                    onChange={handleChange}
                    readOnly={false}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="password">Department:</label>
                  <input
                    type="department"
                    id="department"
                    name="department"
                    defaultValue={data.department}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="password">Semester:</label>
                  <input
                    type="semester"
                    id="semester"
                    name="semester"
                    defaultValue={data.semester}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="user-box">
                  <label htmlFor="branch">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    defaultValue={data.branch}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    defaultValue={data.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="user-box">
                  <label htmlFor="address">Address: </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={data.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <button type="submit">Submit</button> */}
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary download" onClick={generateReceipt}>
        Download Receipt ( PDF )
      </button>
    </div>
  );
}

export default StudentHome;
