import React from "react";
import "./Fifth.css";

function Fifth() {
	return (
		<div className="workProgressDiv">
			<div className="leftProgressDiv">
				<h1>Процесс выполнения корсета </h1>
				<img src={require("../img/13.jpg")} alt="progress example #1" />
				<img src={require("../img/14.jpg")} alt="progress example #2" />
				<img src={require("../img/15.jpg")} alt="progress example #3" />
			</div>
			<div className="centerProgressDiv">
				<img src={require("../img/16.jpg")} alt="result example #1" />
				<img src={require("../img/17.jpg")} alt="result example #2" />
			</div>
			<div className="rightProgressDiv">
				<h1>Этапы выполнения вытачек по разным методикам</h1>
				<img src={require("../img/18.jpg")} alt="progress example #4" />
				<img src={require("../img/19.jpg")} alt="progress example #5" />
				<img src={require("../img/20.jpg")} alt="progress example #6" />
			</div>
		</div>
	);
}

export default Fifth;
