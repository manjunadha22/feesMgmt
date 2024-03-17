import React from 'react'
import './Vision.css'

function Vision() {
    return (
        <div className='vision'>
            <h2>Vision & Mission</h2>
            <div className="contentt">

                <div className="visionPart">
                    <img src={process.env.PUBLIC_URL + "/images/vision.png"} alt="" />
                    <h3>Our Vision</h3>
                    <ul>
                        <li>To be a centre of excellence in Education and Technology committed towards Socio-Economic advancement of the country.</li>
                    </ul>
                </div>
                <div className="misionPart">
                    <img src={process.env.PUBLIC_URL + "/images/mission.png"} alt="" />
                    <h3>Our Mission</h3>
                    <ul>
                        <li>To impart advanced knowledge in all branches of teaching and learning. • To transform young minds towards professional competence by inculcating values and developing skills.</li>
                        <li>To promote research and ensure continuous value addition among students and employees.</li>
                        <li>To strengthen association with industry, research organizations and alumni to enhance knowledge on current technologies.</li>
                        <li>To promote next generation technocracy and nurture entrepreneurial culture for social-economic
                            growth.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Vision