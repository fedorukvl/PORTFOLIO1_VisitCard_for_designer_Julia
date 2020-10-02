import axios from "axios";
export let getData = () => (dispatch) => {
	return axios
		.get("https://pizza-dbb.herokuapp.com/jull")
		.then((res) => {
			dispatch(setData(res.data[0]));
			return res.data[0];
		})
		.catch((err) => {
			alert(err);
		});
};
export let setData = (data) => ({
	type: "SET_DATA",
	payload: data,
});
