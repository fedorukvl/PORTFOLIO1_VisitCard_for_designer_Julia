import React from "react";
import { Fifth } from "../Components/index.js";
import { shallow } from "enzyme";

describe("Tests of <Fifth/> component", () => {
	let fifthComponent;
	beforeEach(() => {
		fifthComponent = shallow(<Fifth />);
	});
	afterEach(() => {
		fifthComponent = null;
	});
	describe("First render of <Fifth/> component", () => {
		it("Renders properly", () => {
			expect(fifthComponent).not.toBeNull();
			expect(fifthComponent.debug()).toMatchSnapshot();
		});
	});

	describe("<Fifth/> component renders elements", () => {
		it("Renders elements properly", () => {
			expect(fifthComponent.debug()).toMatchSnapshot();
		});

		it("Renders elements properly (checking divs)", () => {
			expect(
				fifthComponent.find(".workProgressDiv").children()
			).toHaveLength(3);
		});
	});

	describe("Element`s children of <Fifth/> component render properly", () => {
		it(".leftProgressDiv have children", () => {
			expect(
				fifthComponent.find(".leftProgressDiv").children()
			).toHaveLength(4);
		});

		it(".leftProgressDiv have <h1/> with text `Процесс выполнения корсета` as first children", () => {
			expect(
				fifthComponent.find(".leftProgressDiv").childAt(0).type()
			).toEqual("h1");
			expect(fifthComponent.childAt(0).find("h1").text()).toEqual(
				"Процесс выполнения корсета "
			);
		});
	});
});
