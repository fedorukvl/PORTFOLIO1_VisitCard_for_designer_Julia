import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchData from "../Reducer/fetchData.js";
let store = createStore(fetchData, applyMiddleware(thunk));
export default store;
