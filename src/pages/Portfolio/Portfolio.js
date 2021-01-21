import React from 'react';
import './Portfolio.css';
import Booktivist from '../../img/Booktivist.png';
import Hench from '../../img/hench-printworks.png';
import Spotify from '../../img/spotify.png';
import Zomato from '../../img/zomato.png';

const Portfolio = () => {
	return (
		<main id='about'>
			<h1 className='lg-heading'>
				My
				<span>Portfolio</span>
			</h1>
			<h2 className='sm-heading'>Check out some of my work</h2>
			<div className='projects'>
				<div className='item'>
					<a href='#!'>
						<img src={Zomato} alt='projects' />
					</a>
					<a
						href='https://github.com/Sammon123/Zomato'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fab fa-github'></i> Project 1 - Zomato
					</a>
					<a
						href='https://sammon123.github.io/Zomato/'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Github Pages
					</a>
				</div>
				<div className='item'>
					<a href='#!'>
						<img src={Booktivist} alt='projects' />
					</a>
					<a
						href='https://github.com/Team-1-UNH-Bootcamp/Booktivist'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fab fa-github'></i> Project 2 - Booktivist
					</a>
					<a
						href='http://ancient-escarpment-64438.herokuapp.com/'
						target='_blank'
						rel='noreferrer'
						className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Heroku
					</a>
				</div>

				<div className='item'>
					<a href='#!'>
						<img src={Hench} alt='projects' />
					</a>
					<a href='https://github.com/Sammon123/Hench' className='btn-dark'>
						<i className='fab fa-github'></i> Project 3 - Hench Printworks
					</a>
					<a href='https://hench-printworks.web.app/' className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Firebase
					</a>
				</div>
				<div className='item'>
					<a href='#!'>
						<img src={Spotify} alt='projects' />
					</a>
					<a
						href='https://github.com/Sammon123/Spotify-React'
						className='btn-dark'>
						<i className='fab fa-github'></i> Spotify Clone
					</a>
					<a href='https://spotify-react-cf8fa.web.app/' className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Firebase
					</a>
				</div>
				<div className='item'>
					<a href='#!'>
						<iframe
							title='demo'
							src='https://drive.google.com/file/d/14eROv5UD-SCvUBrOdgc1Eu9P9m5Bk44w/preview'></iframe>
					</a>
					<a
						href='https://github.com/Sammon123/readme-generator'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fab fa-github'></i> Readme Generator
					</a>
					<a
						href='https://sammon123.github.io/readme-generator/'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Github Pages
					</a>
				</div>
				<div className='item'>
					<a href='#!'>
						<iframe
							title='demo'
							src='https://drive.google.com/file/d/1c6kxPh0KZ_ME18qSDYHk3IQDGug-Vjr2/preview'></iframe>
					</a>
					<a
						href='https://github.com/Sammon123/code-quiz'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fab fa-github'></i> Code Quiz
					</a>
					<a
						href='https://sammon123.github.io/code-quiz/'
						rel='noreferrer'
						target='_blank'
						className='btn-dark'>
						<i className='fas fa-arrow-right'></i> Github Pages
					</a>
				</div>
			</div>
		</main>
	);
};

export default Portfolio;
