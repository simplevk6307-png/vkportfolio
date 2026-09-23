import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
        <Header/>
        <div className='home'>
            <section className="home-section" id="home">
                <div className="home-container container">
                    <div className="home-content">
                        <p className="greeting">Hello, I'm</p>
                        <h1>Vanshika Kashyap</h1>
                        <h2>Web Developer</h2>
                        <p className="home-description">I create modern, responsive and user-friendly websites that help
                            businesses build a strong digital presence.</p>
                        <div className="home-buttons"><a className="button primary-button" href="#skills">View My
                            Skills</a><a className="button secondary-button" href="#contact">Contact Me</a></div>
                    </div>
                    <div className="image-wrapper">
                        <div className="image-shape">

                            <img className="profile-image" src="https://tse1.mm.bing.net/th/id/OIP.mgtrKdfggwGjuFWH6W1X_wHaJ4?r=0&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"alt="Vanshika kashyap- Web Developer , Video editor">
                            </img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    )
}

export default Home
