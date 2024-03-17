import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
    const scrollToContent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="footer">
            <div className="footer__contents">
                <div className="footer__content-left">
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/SV-logo.png'} alt="" />
                    <div className="footer__cotent-left__options">
                        <div className="footer__cotent-left__option">
                            <Link to="/home" onClick={() => scrollToContent('home')}> <a href="/">Home</a></Link>
                            <Link to="/about" onClick={() => scrollToContent('about')}> <a href="/">About Us</a></Link>
                            <Link to="/vision"><a href="/">Vision & Mission</a></Link>
                            <Link to="/vision"><a href="/">Administration</a></Link>
                        </div>
                        <div className="footer__cotent-left__option2">
                            <a href={process.env.PUBLIC_URL + "/images/academic-calendar.pdf"} target="_blank">Acadamic Calender</a>
                            <Link to="/notifications"><a href="/">Notifications</a></Link>
                            <Link to="/campustour"><a href="/">Campus Tour</a></Link>
                            <Link to="/privacy"><a href="/">Privacy Policy</a></Link>
                            <Link to="/term"><a href="/">Terms and Conditions</a></Link>
                        </div>
                    </div>
                </div>
                <div className="hey">
                    <div className="contact_content">
                        <h2 className='contact'>Contact US</h2>
                        <div className="address">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <h4>Sri Venkateswara University, Tirupati, Andhra Pradesh - 517502</h4>
                        </div>
                        <button><a href="https://goo.gl/maps/wrdsiNe4me6xYdzdA">View on maps</a> </button>
                        <div className="address">
                            <span class="material-symbols-outlined">
                                call
                            </span>
                            <h4>+91 (877) 2249472</h4>
                        </div>
                        <div className="address">
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                            <h4>registrarsvu@gmail.com</h4>
                        </div>
                        <div className="footer__icons">
                            <FacebookIcon className='facebook' />
                            <InstagramIcon className='instagram' />
                            <LinkedInIcon className='linkdin' />
                            <TwitterIcon className='twitter' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer