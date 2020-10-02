import React, { useEffect } from "react";
import { First, Second, Third, Fourth, Fifth, Sixth } from "../index.js";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Action/getData.js";
import "./App.css";
function App() {
	let dispatch = useDispatch();
	let data = useSelector((state) => state.data);
	useEffect(() => {
		dispatch(getData());
	}, []);
	return (
		<div className="mainContainer">
			<First personalInfo={data} />
			<Second />
			<Third karateProject={data.projects} />
			<Fourth pantsProject={data.projects} />
			<Fifth />
			<Sixth />
		</div>
	);
}

export default App;
