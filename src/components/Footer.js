import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contents">
                <div className="footer__content-left">
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/SV-logo.png'} alt="" />
                    <div className="footer__cotent-left__options">
                        <div className="footer__cotent-left__option">
                            <a href="/">About Us</a>
                            <a href="/">Annual Checkup</a>
                            <a href="/">Blog</a>
                            <a href="/">Careers</a>
                        </div>
                        <div className="footer__cotent-left__option1">
                            <a href="/">How it works</a>
                            <a href="/">Privacy Policy</a>
                        </div>
                        <div className="footer__cotent-left__option2">
                            <a href="/">Contact Us</a>
                            <a href="/">FAQs</a>
                        </div>
                    </div>
                </div>
                <div className="footer__content-middle">
                    <h2>Contact Us</h2>
                    <div className="top__insurances">
                        <a href="/">Your Clg Mail ID</a>
                        <a href="/">All rights reserved @Sv University</a>
                    </div>
                </div>
                <div className="footer__content-right">
                    <h2>Follow Us</h2>
                    <div className="footer__icons">
                        <FacebookIcon className='facebook' />
                        <InstagramIcon className='instagram' />
                        <LinkedInIcon className='linkdin' />
                        <TwitterIcon className='twitter' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer