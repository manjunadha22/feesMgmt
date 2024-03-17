import React from 'react'
import "./ContactUs.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function ContactUs() {
    return (
        <div className='hey'>
            <div className="contact_content">
                <h2>Contact US</h2>
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
    )
}

export default ContactUs