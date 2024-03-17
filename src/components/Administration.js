import React, { useState } from 'react'
import './Administration.css'

function Administration() {
    const [about, setAbout] = useState(true);
    const [principal, setPrincipal] = useState(false);
    const [vice, setVice] = useState(false);
    const [depts, setDepts] = useState(false);

    const handleAbout = () => {
        setAbout(!about)
        setPrincipal(false)
        setVice(false)
        setDepts(false)
    }
    const handlePrincipal = () => {
        setAbout(false)
        setPrincipal(!principal)
        setVice(false)
        setDepts(false)
    }
    const handleVice = () => {
        setAbout(false)
        setPrincipal(false)
        setVice(!vice)
        setDepts(false)
    }
    const handleDepts = () => {
        setAbout(false)
        setPrincipal(false)
        setVice(false)
        setDepts(!depts)
    }

    return (
        <div className='main__ui'>
            <div className="btns">
                <button className={`about ${about ? "active" : ""}`} onClick={handleAbout} >About</button>
                <button className={`principal ${principal ? "active" : ""}`} onClick={handlePrincipal}>Principal</button>
                <button className={`vice ${vice ? "active" : ""}`} onClick={handleVice}>Vice principal</button>
                <button className={`depts ${depts ? "active" : ""}`} onClick={handleDepts}>Departments</button>
            </div>
            {about && <div className="respective">
                <h2>CMCS</h2>
                <img src={process.env.PUBLIC_URL + '/images/Department-of-Commerce-Management-Computer-Science.jpg'} alt="" />
                <p>Sri Venkateswara University College has been a premiere institution for higher learning, research, extension and consultancy. It is a constituent campus college of Sri Venkateswara University.</p>
                <p>The College is located serenely in a picturesque campus at the foot of the Seven Hills. With well planned and aesthetically designed buildings spread in a green, clean and expansive environment, the campus is a joyous place to work and live. Since its inception half century ago, the College has been successfully maintaining and meeting national and international standards in higher education.</p>
                <p>1. COMMERCE <br></br>

                    Department of Commerce has excellence in commerce education is our mission and individual’s holistic development and quality education in commerce to make effective contribution to the national economy in a dynamic environment. Making the students skillful, competitive, and communicative and grooming them to be fit for their placement in the production and service sectors in the global environment.</p>
                <p><b>COURSES OFFERED</b></p>
                <p>M. Com:</p>
                <ul>
                    <li>PhD (Full time / Part time)</li>
                    <li>Accounting & Finance (A&F)</li>
                    <li>Financial Management (FM)</li>
                </ul>
                <p>2. BUSINESS MANAGEMENT <br></br>

                    Department of Management Studies makes every effort to dismantle the patterned mindsets and restructure the personality of the students. Great emphasis is laid on individual development and team work. The learning techniques like Role play, Case analysis, Group Discussions, Simulation exercises, Management Games, Business information sharing conferences, etc., are part of the pedagogy.</p>
                <p><b>COURSES OFFERED</b></p>
                <ul>
                    <li>PhD (Full time / Part time)</li>
                    <li>MBA</li>
                </ul>
                <p>3. COMPUTER SCIENCE <br></br>

                    Department of Computer Science has efficient and technical qualified faculty who continuously updating their knowledge as per requirement of present world technology and forwarding the fruitful knowledge to the students. The department is consistently achieving more than 99% results in all the courses offered. Along with education our students are participating in the development of projects as per the needs of various departments in the university and also department.</p>

                <p><b>COURSES OFFERED</b></p>
                <ul>
                    <li>PhD (Full time / Part time)</li>
                    <li>MPhil</li>
                    <li>MCA</li>
                    <li>MSc</li>
                </ul>
            </div>}
            {principal && <div className="principalContent">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/PV-Narsaiah.png'} alt="" />
                    <div className="leftContent">

                        <h3><b>Dr. P.V. Narasaiah</b></h3>
                        <p className='role'>Principal, SVU CM & CS & Professor,<br></br> Department of Commerce</p>
                        <p>M.Com, M.Phil, Ph.D.</p>
                        <p className='email'>Email</p>
                        <p>drpvnarasaiah@gmail.com</p>
                    </div>
                </div>
                <div className="right">
                    <p><b>Prof. P.V. Narasaiah</b> did his M.Com, M.Phil, and Ph.D. in 1985, 1988 and 1990 respectively. He got first rank in M.Com. He joined S.V University Service as Lecturer at SVU PG Center, Kadapa during 1992 and promoted as Associate Professor by 2001. During 2007, he was repatriated to S.V University Campus, Tirupati when SVU PG Center was elevated to Y.V University. He became Professor during the year 2009. He has to his credit 92 articles published in reputed National and International Journals and 9 books. He successfully guided 11 Ph.Ds and 3 M.Phils. He has completed 2 ICSSR and UGC research projects. He has attended and presented 127 papers in different National and International Seminars. He has organized One National Seminar and acted as Deputy Director for International Conference , Co-Director for 3 National Seminars. He delivered 12 AIR Talks on different contemporary issues, more particularly relating to his area of research.</p>
                    <p>He is a life member, ICA, AIAA, Red Cross Society (Hyderabad Chapter). He is a editorial member for i-manager and International Journal of Business Research (MITTS), Madanapalle. He acted as PRO, Co-ordinator for different courses and Deputy Warden at Y.V Universtiy. He was the Co-ordinator for HPIC for University examinations. After joining SVU, he served as Co-ordinator for M.Com (A&F) and MFM Courses, Deputy Warden for SVU CM&CS Hostel for Men. He was also member of BOS, SVU. At present, he is a member of BOS, Y.V University, Sri Padmavathi Mahila Visva Vidyalayam, Rayalaseema University. He was a member in the panel for paper setting relating to APSET. He is a resource person to many Universities.</p>
                    <p>He is currently the Principal, SVU College of Commerce, Management and Computer Science.</p>
                    <h3>Dr. P.V. Narasaiah</h3>
                    <p>Principal, SVU CM & CS & Professor, Department of Commerce</p>
                    <p>M.Com, M.Phil, Ph.D.</p>
                </div>
            </div>}
            {vice && <div className="principalContent">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/M-Venkateswarlu.png'} alt="" />
                    <div className="leftContent">

                        <h3><b>Dr. M. Venkateswarlu</b></h3>
                        <p className='role'>Professor & Vice-Principal</p>
                        <p>M.Com, MBA, M.Phil, Ph.D., PGDCA</p>
                        <p className='email'>Email</p>
                        <p>drmidasala@gmail.com</p>
                    </div>
                </div>
                <div className="right">
                    <p><b>Prof. M.Venkateswarlu</b> was born in Karavadi Village, Prakasam District. He obtained B.A. (AES) Degree in 1985, M.Com. Degree in 1987, M.Phil. Degree in the year 1990 and Ph.D. degree from S.V. University in the year 1994. He was appointed as Lecturer in S.V.University, Tirupati in October 1992, promoted as Associate Professor during 2001 and subsequently he became Professor during 2009. He got his PGDCA and MBA Degrees during the years 2011, 2013 respectively. He is having 28 years of P.G. teaching experience, 7 M.Phil. Degrees and 24 Ph.D. degrees were awarded and 9 post doctoral fellows under his able guidance. He has published 142 articles in various repeated National and International Journals. He has attended 53 National and International conferences and also attended 6 online webinars.</p>
                    <p>He has completed one UGC MRP major research project and presently he is having ICSSR research project. He has organized two national seminars; he worked as Co-ordinator for M.Com A&F Course. He is a Member of Board of Studies in Davangere University and Bangalore North University. He is editorial board member for SELP Journal in Tiruchirapalli. He is life member in various professional bodies like All India Commerce Association, All India Accounting Association, and Business Vision. He worked as Director, Directorate of Admissions (DOA), Sri Venkateswara University, Tirupati from 01-01-2020 to 07-05-2021.At present he is Vice-Principal, SVU CM & CS, Sri Venkateswara University, Tirupati.</p>
                    <p>He is currently the Principal, SVU College of Commerce, Management and Computer Science.</p>
                    <h3>Dr. M. Venkateswarlu</h3>
                    <p>Professor & Vice-Principal</p>
                    <p>M.Com, MBA, M.Phil, Ph.D., PGDCA</p>
                </div>
            </div>}
            {depts && <div className="deptss">
                <div className="btn">
                    <button>Business Management</button>
                </div>
                <div className="btn">
                    <button>Computer Science</button>
                </div>
                <div className="btn">
                    <button>Department of Commerce</button>
                </div>
            </div>}
        </div>
    )
}

export default Administration