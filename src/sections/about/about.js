import React from 'react';

import './style.css';

function AboutPage() {
    return(
        <div className="about-page">
            {/*

                I would like to have multiple sections regarding my background,
                my education, and my personal experience.

            */}
            <div className="background-section">
                <div className="background-text">
                    <h1>My Background</h1>
                    <p>I am a photographer, developer, aspiring green agriculturalist, lifelong learner, and soon to be a father</p>
                    <p></p>
                </div>
                <div className="my-portrait">
                </div>

            </div>
            <div className="skill-section">
                <ul className="skill-list">
                    <li className="skill-item">
                        <div className="skill">
                            <div className="skill-icon">
                                <i className="fab fa-python fa-3x"></i>
                            </div>
                            <div className="skill-detail">
                                <div className="skill-rating">
                                    <ul className="rating-list">
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                    </ul>
                                </div>
                                <div className="skill-frameworks">
                                    <p>Django, Flask</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="skill">
                            <div className="skill-icon">
                                <i className="fab fa-js-square fa-3x"></i>
                            </div>
                            <div className="skill-detail">
                                <div className="skill-rating">
                                    <ul className="rating-list">
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                    </ul>
                                </div>
                                <div className="skill-frameworks">
                                    <p>React, Angular, NodeJS, Express, Fastify</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="skill">
                            <div className="skill-icon">
                                <i className="fab fa-apple fa-3x"></i>
                            </div>
                            <div className="skill-detail">
                                <div className="skill-rating">
                                    <ul className="rating-list">
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot yes-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                        <i className="fas fa-pepper-hot no-skill"></i>
                                    </ul>
                                </div>
                                <div className="skill-frameworks">
                                    <p>XCode, Swift, Apple Store Deployment</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;
