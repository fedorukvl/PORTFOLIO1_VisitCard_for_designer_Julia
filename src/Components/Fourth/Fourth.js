import React from "react";
import PropTypes from "prop-types";
import "./Fourth.css";
import ninethPic from "../img/9.png";
import tenthPic from "../img/10.png";
import eleventhPic from "../img/11.jpg";
function Fourth({ pantsProject }) {
	return (
		<div className="pantsDiv">
			<div className="leftPantsImgDiv">
				<img
					src={tenthPic}
					alt="pants #2"
					className="pantsProfilePic"
				/>
				<img src={ninethPic} alt="pants #1" className="pantsPic" />
			</div>
			<div className="rightPantsDescriptionDiv">
				<h1>Выполненный проект</h1>
				<br />
				{pantsProject?.length && <p>{pantsProject[1]}</p>}
			</div>
		</div>
	);
}

export default Fourth;
Fourth.propTypes = {
	karateProject: PropTypes.arrayOf(PropTypes.string),
};
