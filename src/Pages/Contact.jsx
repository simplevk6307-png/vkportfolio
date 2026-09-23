import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Contact = () => {
    const handleclick = () => { 
        console.log("hello")

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hmara form submit ho gya");
        
    }
    const handeleChange = (a) =>{
        console.log(a.target.value);
        
    }
    const handeleEmail = (b) =>{
        console.log(b.target.value);
    }
    return (
        <>
        <Header/>
        <div className='Contact'>
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-subtitle">Let's work together</p>
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-information">
                            <h3>Let's discuss your project</h3>
                            <p>Have a project idea or a job opportunity? Send me a message through this form.</p>
                            <div className="contact-item">
                                <div className="contact-icon">E</div>
                                <div><span>Email</span>
                                <strong>simple.vk@gmail.com</strong>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">P</div>
                                <div>
                                    <span>Phone</span>

                                    <strong>+91 6307235837</strong>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">L</div>
                                <div>
                                    <span>Location</span>
                                    <strong>India</strong>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="userName">Your Name</label>
                                <input id="userName"name="userName" type="text" placeholder="Enter your name" required="" onChange={handeleChange}></input>

                                

                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email Address</label>
                                <input id="userEmail" name="userEmail" type="email" placeholder="Enter your email"
                                    required="" onChange={handeleEmail}></input>


                            </div>
                            
                            
                            <div className="form-group"><label htmlFor="userMessage">Message</label>
                            <textarea id="userMessage" name="userMessage" placeholder="Write your message here..."
                                rows="6" required=""></textarea>
                                </div>
                                <button
                                    className="button primary-button send-button" type="submit" onClick={handleclick}>Send Message</button>
                            <p className="form-status" id="form-status"></p>
                        </form>
                    </div>
                </div>
            </section>

        </div>
        <Footer/>
        </>
    )
}

export default Contact
