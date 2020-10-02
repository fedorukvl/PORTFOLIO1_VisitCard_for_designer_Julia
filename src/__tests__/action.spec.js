import { setData } from "../Redux/Action/getData.js";

describe("Action test", () => {
	it("setData(): should attach news data", () => {
		let expectedData = 123;
		const expectedAction = {
			type: "SET_DATA",
			payload: 123,
		};
		expect(setData(expectedData)).toEqual(expectedAction);
	});
});
