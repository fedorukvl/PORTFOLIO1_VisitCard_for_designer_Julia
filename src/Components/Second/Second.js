import React from "react";
import "./Second.css";
import firstPic from "../img/1.jpg";
import secondPic from "../img/2.png";
import thirdPic from "../img/3.jpg";
import fourthPic from "../img/4.jpg";
function Second() {
	return (
		<div className="basicCloseDiv">
			<div className="leftDiv">
				<img src={firstPic} alt="first concept" className="firstImg" />
				<img
					src={secondPic}
					alt="fourth concept"
					className="secondImg"
				/>
			</div>
			<div className="rightDiv">
				<img src={thirdPic} alt="second concept" className="thirdImg" />
				<img
					src={fourthPic}
					alt="third concept"
					className="fourthImg"
				/>
			</div>
		</div>
	);
}

export default Second;
