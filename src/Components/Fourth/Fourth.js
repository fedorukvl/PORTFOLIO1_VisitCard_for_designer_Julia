import React from "react";
import PropTypes from "prop-types";
import "./Fourth.css";

function Fourth({ pantsProject }) {
	return (
		<div className="pantsDiv">
			<div className="leftPantsImgDiv">
				<img
					src={require("../img/10.png")}
					alt="pants #2"
					className="pantsProfilePic"
				/>
				<img src={require("../img/9.png")} alt="pants #1" className="pantsPic" />
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
