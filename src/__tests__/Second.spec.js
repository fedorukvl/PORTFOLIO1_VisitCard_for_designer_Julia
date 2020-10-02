import React from "react";
import { Second } from "../Components/index.js";
import { shallow } from "enzyme";

describe("Tests of <Second/> component", () => {
	let secondComponent;
	beforeEach(() => {
		secondComponent = shallow(<Second />);
	});
	afterEach(() => {
		secondComponent = null;
	});
	describe("First render of <Second/> Component", () => {
		it("Renders properly", () => {
			expect(secondComponent).not.toBeNull();
			expect(secondComponent.debug()).toMatchSnapshot();
		});
	});

	describe("<Second/> component renders elements", () => {
		it("Renders elements properly", () => {
			expect(secondComponent.debug()).toMatchSnapshot();
		});

		it("Renders elements properly (checking divs)", () => {
			expect(secondComponent.find(".rightDiv")).toHaveLength(1);
			expect(secondComponent.find(".leftDiv")).toHaveLength(1);
		});
	});

	describe("Element`s children of <Second/> component render properly", () => {
		it(".rightDiv have children", () => {
			expect(secondComponent.find(".rightDiv").children()).toHaveLength(
				2
			);
		});

		it(".rightDiv have <img/> as children", () => {
			expect(secondComponent.find(".rightDiv").childAt(0).type()).toEqual(
				"img"
			);
		});
	});
});
