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
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider.png'} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider1.png'} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider3.png'} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/slider4.png'} alt="Third slide" />
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
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> Latest updates here
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> Latest updates here
            <img src={process.env.PUBLIC_URL + "/images/new.gif"} alt="" /> Latest updates here
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