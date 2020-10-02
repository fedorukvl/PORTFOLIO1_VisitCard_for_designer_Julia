import React from "react";
import PropTypes from "prop-types";
import "./Third.css";
import fifthPic from "../img/5.png";
import sixthPic from "../img/6.png";
import seventhPic from "../img/7.png";

function Third({ karateProject }) {
	return (
		<div className="karateDiv">
			<div className="leftImgDiv">
				<img src={fifthPic} alt="karate concept #1" />
				<img src={sixthPic} alt="karate concept #2" />
				<img src={seventhPic} alt="karate concept #3" />
			</div>
			<div className="rightDescriptionDiv">
				<h1>Примеры выполненных эскизов на тему : </h1>
				<br />
				{karateProject?.length && <p>{karateProject[0]}</p>}
			</div>
		</div>
	);
}

export default Third;
Third.propTypes = {
	karateProject: PropTypes.arrayOf(PropTypes.string),
};
