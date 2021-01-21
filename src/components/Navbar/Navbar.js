import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<header className='navbar navbar-expand-lg navbar-light'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					Peter Sammon
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='True'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								About Me
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='/portfolio'>
								Portfolio
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
