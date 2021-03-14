import React from "react";
import PropTypes from "prop-types";
import "./Third.css";

function Third({ karateProject }) {
	return (
		<div className="karateDiv">
			<div className="leftImgDiv">
				<img src={require("../img/5.png")} alt="karate concept #1" />
				<img src={require("../img/6.png")} alt="karate concept #2" />
				<img src={require("../img/7.png")} alt="karate concept #3" />
			</div>
			<div className="rightDescriptionDiv">
				<h1>Примеры выполненных эскизов на тему : </h1>
				<br />
				{karateProject?.length && <p>{karateProject[0]}</p>}
			</div>
		</div>
	);
}

Third.propTypes = {
	karateProject: PropTypes.arrayOf(PropTypes.string),
};

export default Third;
