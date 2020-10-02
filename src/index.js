import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./Components/index.js";
import store from "./Redux/Store/store.js";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
