import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Skills = () => {
    return (
        <>
        <Header/>
        <div className='Skills'>
            <section className="skills-section" id="skills">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-subtitle">What I work with</p>
                        <h2>My Skills</h2>
                    </div>
                    <div className="skills-grid">
                        <article className="skill-card">
                            <div className="skill-icon">HTML</div>
                            <h3>HTML</h3>
                            <p>Semantic and accessible web page structure.</p>
                        </article>
                        <article className="skill-card1">
                            <div className="skill-icon1">CSS</div>
                            <h3>CSS</h3>
                            <p>Responsive layouts, animations and modern designs.</p>
                        </article>
                        <article className="skill-card2">
                            <div className="skill-icon2">JS</div>
                            <h3>JavaScript</h3>
                            <p>Interactive and dynamic website functionality.</p>
                        </article>
                        <article className="skill-card3">
                            <div className="skill-icon3">UI</div>
                            <h3>Responsive Design</h3>
                            <p>Layouts that work properly on every screen size.</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
    )
    
}

export default Skills
