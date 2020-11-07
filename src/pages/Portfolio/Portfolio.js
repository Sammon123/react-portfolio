import React from 'react'
import './Portfolio.css'
import Booktivist from '../../img/Booktivist.png'
import PasswordGenerator from '../../img/passcodeGenerator.png'
import CodeRefactor from '../../img/codeRetractor.png'
import Resume from '../../img/Resume.png';

const Portfolio = () => {
    return (
        <main id="about">
            <h1 className="lg-heading">
                My
				<span>Portfolio</span>
            </h1>
            <h2 className="sm-heading">
                Check out some of my work
			</h2>
            <div className="projects">
                <div className="item">
                    <a href="#!">
                        <img
                            src="https://github.com/Sammon123/Zomato/blob/master/dist/appExample.png?raw=true"
                            alt="projects"
                        />
                    </a>
                    <a
                        href="https://github.com/Sammon123/Zomato"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fab fa-github"></i> Project 1 - Zomato
					</a>
                    <a
                        href="https://sammon123.github.io/Zomato/"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src={Booktivist} alt="projects" />
                    </a>
                    <a
                        href="https://github.com/Team-1-UNH-Bootcamp/Booktivist"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fab fa-github"></i> Project 2 - Booktivist
					</a>
                    <a
                        href="http://ancient-escarpment-64438.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-dark"
                    >
                        <i className="fas fa-arrow-right"></i> Heroku
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <iframe
                            title="demo"
                            src="https://drive.google.com/file/d/14eROv5UD-SCvUBrOdgc1Eu9P9m5Bk44w/preview"
                        ></iframe>
                    </a>
                    <a
                        href="https://github.com/Sammon123/readme-generator"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fab fa-github"></i> Readme Generator
					</a>
                    <a
                        href="https://sammon123.github.io/readme-generator/"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <iframe
                            title="demo"
                            src="https://drive.google.com/file/d/1c6kxPh0KZ_ME18qSDYHk3IQDGug-Vjr2/preview"
                        ></iframe>
                    </a>
                    <a
                        href="https://github.com/Sammon123/code-quiz"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fab fa-github"></i> Code Quiz
					</a>
                    <a
                        href="https://sammon123.github.io/code-quiz/"
                        rel="noreferrer"
                        target="_blank"
                        className="btn-dark"
                    >
                        <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src={PasswordGenerator} alt="projects" />
                    </a>
                    <a
                        href="https://github.com/Sammon123/passcode-generator"
                        className="btn-dark"
                    >
                        <i className="fab fa-github"></i> Password Generator
					</a>
                    <a
                        href="https://sammon123.github.io/passcode-generator/"
                        className="btn-dark"
                    >
                        <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src={CodeRefactor} alt="projects" />
                    </a>
                    <a href="https://github.com/Sammon123/code-refactor" className="btn-dark">
                        <i className="fab fa-github"></i> Code Refactor
					</a>
                    <a href="https://sammon123.github.io/code-refactor/" className="btn-dark">
                        <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src={Resume} alt="resume" />
                    </a>
                    <a href="../../img/Peter-Sammon.pdf" className="btn-dark">
                        Resume
					</a>
                </div>
            </div>
        </main>
    )
}

export default Portfolio
