import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./code.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Code-Astra Hackathon 2023</div>
							<div className="work-subtitle demo">
								<b>FIFTH</b> position in IITB Hackathon <br/>
								<a href="https://www.linkedin.com/in/shrikant-surwase-139aa2224/recent-activity/all/" target="_blank">Link</a> <br/>
								
							</div>
							<div className="work-duration">18/06/2023</div>
							
						</div>

						<div className="work">
							<img
								src="./codeclause.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">CodeClause</div>
							<div className="work-subtitle"> 
								<b>Intern</b> at CodeClause <br/>
								<a href="https://www.linkedin.com/posts/shrikant-surwase-139aa2224_offer-letter-activity-7025060628851556352--S76?utm_source=share&utm_medium=member_desktop" target='_blank'>Link</a>
							</div>
							<div className="work-duration">27/01/2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
