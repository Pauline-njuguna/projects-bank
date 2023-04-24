import React from 'react';
import './about.css';

function AboutUs () {
	return (
		<div style={ {
			textAlign: 'left',
			position: 'relative',
			width: '90%',
			margin: '0 auto',
			height: '100%',
		} }>
			<h1>About Us</h1>
			<p style={ {
				textAlign: 'left',
				fontSize: '16px'
			} }>
				<section style={ { marginBottom: 16 + 'px' } }>
					Welcome to our project bank! We are excited to be a resource for students who have completed training at Moringa School. Our goal is to provide a platform where you can showcase your skills and knowledge by contributing to projects that can make a difference in the world.
				</section>
				<section style={ { marginBottom: 16 + 'px' } }>
					At our project bank, we believe that knowledge and skills are only valuable when applied to real-world problems. That's why we have curated a wide range of projects that address various challenges in different industries. Whether you are interested in web development, data analysis, mobile app development, or any other field, you will find projects that match your interests and skills.
				</section>

				<section style={ { marginBottom: 16 + 'px' } }>
					We are committed to promoting diversity and inclusion in the tech industry. We believe that everyone should have an equal opportunity to contribute to meaningful projects regardless of their background. That's why we welcome students from all walks of life to join our community.
				</section>


				<section style={ { marginBottom: 16 + 'px' } }>
					We are excited to see the amazing projects that you will create and we are committed to supporting you every step of the way. Together, let's use our skills and knowledge to make a positive impact in the world.
				</section>
			</p>
		</div>
	);
}

export default AboutUs;
