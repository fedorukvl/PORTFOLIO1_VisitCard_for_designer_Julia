let initialState = {
	data: [],
};
let fetchData = (state = initialState, action) => {
	switch (action.type) {
		case "SET_DATA":
			return {
				...state,
				data: action.payload,
			};
		default: {
			return { ...state };
		}
	}
};
export default fetchData;
