import React from 'react'

const Projects = () => {
    return (
        <div className="body">
            <main id="about">
                <h1 className="lg-heading">
                    My
				<span> Portfolio</span>
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
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fab fa-github"></i> Project 1 - Zomato
					</a>
                        <a
                            href="https://sammon123.github.io/Zomato/"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src="https://raw.githubusercontent.com/Sammon123/Portfolio/master/assets/Booktivist.png" alt="projects" />
                        </a>
                        <a
                            href="https://github.com/Team-1-UNH-Bootcamp/Booktivist"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fab fa-github"></i> Project 2 - Booktivist
					</a>
                        <a
                            href="http://ancient-escarpment-64438.herokuapp.com/"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fas fa-arrow-right"></i> Heroku
					</a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <iframe
                                src="https://drive.google.com/file/d/14eROv5UD-SCvUBrOdgc1Eu9P9m5Bk44w/preview"
                            ></iframe>
                        </a>
                        <a
                            href="https://github.com/Sammon123/readme-generator"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fab fa-github"></i> Readme Generator
					</a>
                        <a
                            href="https://sammon123.github.io/readme-generator/"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <iframe
                                src="https://drive.google.com/file/d/1c6kxPh0KZ_ME18qSDYHk3IQDGug-Vjr2/preview"
                            ></iframe>
                        </a>
                        <a
                            href="https://github.com/Sammon123/code-quiz"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fab fa-github"></i> Code Quiz
					</a>
                        <a
                            href="https://sammon123.github.io/code-quiz/"
                            target="_blank"
                            className="btn-dark"
                        >
                            <i className="fas fa-arrow-right"></i> Github Pages
					</a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src="https://raw.githubusercontent.com/Sammon123/Portfolio/master/assets/passcodeGenerator.png" alt="projects" />
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
                            <img src="https://raw.githubusercontent.com/Sammon123/Portfolio/master/assets/codeRetractor.png" alt="projects" />
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
                            <img src="..\images\Resume.png" alt="projects" />
                        </a>
                        <a href="..\src\images\Peter-Sammon.pdf" className="btn-dark">
                            Resume
					</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects
