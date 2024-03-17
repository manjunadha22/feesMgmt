import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Departments.css'
import { DeptContext } from './DeptContext'

function Departments() {
    const { dept, setDept } = useContext(DeptContext)
    const handleBusiness = () => {
        setDept("Business Management")
    }
    const handleCS = () => {
        setDept("Computer Science")
    }
    const handleCM = () => {
        setDept("Department of commerce")
    }
    return (
        <div className='departments'>
            <h4>Select your department</h4>
            <div className="btnns">
                <div className="btnn">
                    <Link to='/student'><button onClick={handleBusiness}>Business Management</button></Link>
                </div>
                <div className="btnn">
                    <Link to='/student'><button onClick={handleCS}>Computer Science</button></Link>
                </div>
                <div className="btnn">
                    <Link to='/student'><button onClick={handleCM}>Department of commerce</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Departments