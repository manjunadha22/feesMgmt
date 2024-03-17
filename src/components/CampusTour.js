import React from 'react'
import './CampusTour.css'

function CampusTour() {
    return (
        <div>
            <h2>Campus Tour</h2>
            <video class="elementor-video" width="1200px" height="750px" src="https://svuniversity.edu.in/Videos/campus-tour.mp4" controls preload="metadata" controlslist="nodownload"></video>
        </div>
    )
}

export default CampusTour