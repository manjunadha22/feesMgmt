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
                <div className="header__middle__break1">
                    <div className="header__option">
                        <a href="/" className='active'><b>Home</b></a>
                    </div>
                </div>
                <div className="header__middle__break4">
                    <div className="header__option">
                        <Link to="/administration"> <a href="/" className='notactive'>Administration</a></Link>
                    </div>
                    <div className="header__option">
                        <Link to="/ourpredecessors"> <a href="/" className='notactive'>Our Predecessors</a></Link>
                    </div>
                </div>
                <div className="header__middle__break2">
                    <div className="header__option">
                        <Link to="/vision"> <a href="/" className='notactive'>Vision & MIsion</a></Link>
                    </div>
                    <div className="header__option">
                        <Link to="/campustour"> <a href="/" className='notactive'>Campus Tour</a></Link>
                    </div>
                    <div className="header__option">
                        <Link to="/notifications"> <a href="/" className='notactive'>Notifications</a></Link>
                    </div>
                </div>
                <div className="header__middle__break3">
                    <div className="header__option">
                        <Link to="/about"> <a href="/" className='notactive'>About Us</a></Link>
                    </div>
                    <div className="header__option">
                        <Link to="/contact"> <a href="/" className='notactive'>Contact Us</a></Link>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <SearchIcon />
                <NotificationsIcon />
                <div className="circle">
                    2
                </div>
                {(!user && !student) && <Link to="/departments"><Button variant="contained" className='btn'>Login</Button></Link>}
                {(user || student) && <Link to="/"><Button variant="contained" className='btn' onClick={() => {
                    setUser("")
                    setStudent("")
                }}>Logout</Button></Link>}
            </div>
        </div>
    )
}

export default NavBar
