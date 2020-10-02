import React from "react";
import "./Fifth.css";
import thirteenthPic from "../img/13.jpg";
import fourteenthPic from "../img/14.jpg";
import fifeteenthPic from "../img/15.jpg";
import sixteenthPic from "../img/16.jpg";
import seventeenthPic from "../img/17.jpg";
import eightteenthPic from "../img/18.jpg";
import nineteenthPic from "../img/19.jpg";
import twelvePic from "../img/20.jpg";
function Fifth() {
	return (
		<div className="workProgressDiv">
			<div className="leftProgressDiv">
				<h1>Процесс выполнения корсета </h1>
				<img src={thirteenthPic} alt="progress example #1" />
				<img src={fourteenthPic} alt="progress example #2" />
				<img src={fifeteenthPic} alt="progress example #3" />
			</div>
			<div className="centerProgressDiv">
				<img src={sixteenthPic} alt="result example #1" />
				<img src={seventeenthPic} alt="result example #2" />
			</div>
			<div className="rightProgressDiv">
				<h1>Этапы выполнения вытачек по разным методикам</h1>
				<img src={eightteenthPic} alt="progress example #4" />
				<img src={nineteenthPic} alt="progress example #5" />
				<img src={twelvePic} alt="progress example #6" />
			</div>
		</div>
	);
}

export default Fifth;
