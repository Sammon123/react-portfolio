import React from 'react';
import ResumePage from '../../img/Resume.pdf';
import './Resume.css';

const Resume = () => {
	return (
		<div className='resume'>
			<h1>My Resume</h1>
			<object className='resume-page' data={ResumePage}>
				Resume
			</object>
		</div>
	);
};

export default Resume;
