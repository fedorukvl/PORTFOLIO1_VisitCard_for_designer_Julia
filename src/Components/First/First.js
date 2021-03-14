import React from "react";
import PropTypes from "prop-types";
import profilePhoto from "../img/profile.jpg";
import "./First.css";
function First({ personalInfo }) {
	return (
		<div className="personalInformation">
			<img src={profilePhoto} alt="profile" />
			<div className="infoDiv">
				<h1>
					Привет! <span>👋</span>
				</h1>
				<p>
					Меня зовут {personalInfo.firstName}{" "}
					{personalInfo.secondName}.
				</p>
				<h2>Образование:</h2>
				<p>{personalInfo.education}</p>
				<h2>Знания и осовоенные программы:</h2>
				<ul>
					{personalInfo?.knowledge?.length &&
						personalInfo.knowledge.map((obj, index) => {
							return <li key={obj + index}>{obj}</li>;
						})}
				</ul>
				<b>{personalInfo.about}</b>
			</div>
		</div>
	);
}
export default First;
First.propTypes = {
	personalInfo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
