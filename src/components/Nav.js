import React from 'react'

const Nav = () => {
    return (
        <div>
            <header className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Peter Sammon</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="True"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/projects">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
