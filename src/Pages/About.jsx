import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
        <Header/>
        <div className='about'>
            <section className=" about-section" id="about">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-subtitle">Get to know me</p>
                        <h2>About Me</h2>
                    </div>
                    <div className="about-grid">
                        <div className="about-card">
                            <h3>Web Developer</h3>
                            <p>I am a passionate web developer who enjoys creating clean, attractive and accessible
                                websites.</p>
                            <p>My goal is to combine good design with efficient code so that every website works
                                smoothly on mobile, tablet and desktop.</p>
                        </div>
                        <div className="details-card">
                            <div className="detail-box"><span className="detail-label">Name</span>
                            <strong>Vanshika
                                Kashyap</strong>
                            </div>
                            <div className="detail-box">
                                <span className="detail-label">Email</span>
                                <strong>simple.vk@gmail.com</strong></div>
                            <div className="detail-box"><span className="detail-label">Location</span>
                            <strong>India</strong>
                            </div>
                            <div className="detail-box"><span className="detail-label">Availability</span>
                            <strong>Available
                                for work</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <Footer/>
        </>
    )
}

export default About
