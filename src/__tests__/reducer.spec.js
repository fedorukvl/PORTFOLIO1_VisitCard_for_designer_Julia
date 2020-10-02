import fetchData, { initialState } from "../Redux/Reducer/fetchData.js";

describe("Reducer test", () => {
	it("SET_DATA tests", () => {
		let action = {
			type: "SET_DATA",
			payload: [1, 2, 3],
		};
		expect(fetchData(initialState, action)).toEqual({
			...initialState,
			data: action.payload,
		});
	});
});
