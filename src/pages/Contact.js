import React from 'react'

const Contact = () => {
    return (
        <div className="body">
            <main id="contact">
                <h1 className="lg-heading">Contact</h1>
                <h2 className="sm-heading">Let's get in touch</h2>
                <h6>Ways to reach me</h6>
                <ul className="contact">
                    <li>
                        Email:
					<a href="https://www.petersammon2@gmail.com">
                            <span className="text-secondary">
                                petersammon2@gmail.com
						</span>
                        </a>
                    </li>
                    <li>
                        Phone:
					<span className="text-secondary">(603) 507-7820</span>
                    </li>
                </ul>

                <h6 className="sm-heading">Find me on social media</h6>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/peter.sammon.3" target="_blank">
                                <i className="fab fa-facebook"> </i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Sammon123"
                            ><i className="fab fa-github"></i
                            ></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/peter-sammon-950a611a7/"
                            ><i className="fab fa-linkedin"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </main>
        </div >
    )
}

export default Contact
