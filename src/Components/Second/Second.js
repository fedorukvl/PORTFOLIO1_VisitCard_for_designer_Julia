import React from "react";
import "./Second.css";

function Second() {
	return (
		<div className="basicCloseDiv">
			<div className="leftDiv">
				<img src={require("../img/1.jpg")} alt="first concept" className="firstImg" />
				<img
					src={require("../img/2.png")}
					alt="fourth concept"
					className="secondImg"
				/>
			</div>
			<div className="rightDiv">
				<img src={require("../img/3.jpg")} alt="second concept" className="thirdImg" />
				<img
					src={require("../img/4.jpg")}
					alt="third concept"
					className="fourthImg"
				/>
			</div>
		</div>
	);
}

export default Second;
