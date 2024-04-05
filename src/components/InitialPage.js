import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './InitialPage.css'

function InitialPage() {
  return (
    <div>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p id='slider0'>A. P. J. Abdul Kalam</p>
            <img id='slider01' src={process.env.PUBLIC_URL + '/images/double.png'} alt="" />
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider.png'} alt="First slide" />
          </div>
          <div class="carousel-item">
            <p id='slider1'>Dr. Babasaheb Ambedkar</p>
            <img id='slider11' src={process.env.PUBLIC_URL + '/images/double.png'} alt="" />
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider1.png'} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <p id='slider3'>Nelson Rolihlahla Mandela</p>
            <img id='slider31' src={process.env.PUBLIC_URL + '/images/double.png'} alt="" />
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider3.png'} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="banner">
        <div className="latest__updates">
          <span className='latest'>LATEST UPDATES</span>
          <marquee behavior="scroll" direction="left" className="update">
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> MCA 1st Year - External laboratory Examinations will be held on 22/03/2024
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> MCA 2nd Year - External laboratory Examinations will be held on 28/03/2024
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> ICET notification has been released
          </marquee>
        </div>
        <div className="banner__content">

          <div className="banner__left">

            <h2>Experience Hassle-Free Fee Transactions!</h2>
            <h5>...No need to waste your time</h5>
            <div className="buttons">
              <Link to="/departments"><Button variant="contained" className='btn'>Pay Fees</Button></Link><br></br>
              <h4>If you are an admin Please login with your credentials : </h4><Link to="/admin"><h4>Click Here to Login as Admin</h4></Link>
            </div>
          </div>
          <div className="banner__right">
            <img src={process.env.PUBLIC_URL + "/images/payfees.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialPage