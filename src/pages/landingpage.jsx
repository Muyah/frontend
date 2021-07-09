import React from 'react'
import Navbar from '../Components/navbar'
import '../css/landingpage.css'
import Landinghero from '../Components/landing.component'
export default function Landingpage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Landinghero/>
        </div>
    )
}
