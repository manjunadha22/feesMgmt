import React, { useContext } from 'react'
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom'
import { FormContext } from './FormContext';
import { UserContext } from './UserContext';

function NavBar() {
    const { user, setUser } = useContext(FormContext)
    const { student, setStudent } = useContext(UserContext)
    return (
        <div className='header'>
            <img className='header__logo' src={process.env.PUBLIC_URL + '/images/SV-logo.png'} alt="Cognizant-logo" />
            <div className="header__middle">
                <div className="header__option">
                    <a href="/" className='active'><b>Home</b></a>
                </div>
                <div className="header__option">
                    <a href="/">About Us</a>
                </div>
                <div className="header__option">
                    <a href="/">Contact</a>
                </div>
                <div className="header__option">
                    <a href="/">FAQs</a>
                </div>
            </div>
            <div className="header__right">
                <SearchIcon />
                <NotificationsIcon />
                <div className="circle">
                    2
                </div>
                {(!user && !student) && <Link to="/student"><Button variant="contained" className='btn'>Login</Button></Link>}
                {(user || student) && <Link to="/"><Button variant="contained" className='btn' onClick={() => {
                    setUser("")
                    setStudent("")
                }}>Logout</Button></Link>}
                {/* {!student && <Link to="/student"><Button variant="contained" className='btn'>Student</Button></Link>}
                {student && <Link to="/"><Button variant="contained" className='btn' onClick={() => {
                    setUser("")
                    setStudent("")
                }}>Logout</Button></Link>} */}
            </div>
        </div>
    )
}

export default NavBar
