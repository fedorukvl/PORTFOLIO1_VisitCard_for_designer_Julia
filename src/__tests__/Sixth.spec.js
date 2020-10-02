import React from "react";
import { shallow } from "enzyme";
import { Sixth } from "../Components/index.js";

describe("Tests of <Sixth/> component", () => {
	let sixthComponent;
	beforeEach(() => {
		sixthComponent = shallow(<Sixth />);
	});
	afterEach(() => {
		sixthComponent = null;
	});
	describe("First render of <Sixth/> component", () => {
		it("Renders properly", () => {
			expect(sixthComponent).not.toBeNull();
			expect(sixthComponent.debug()).toMatchSnapshot();
		});
	});

	describe("<Sixth/> component renders elements properly", () => {
		it("Renders elements propeply", () => {
			expect(sixthComponent.find(".finalDiv").children()).toHaveLength(2);
		});
	});

	describe("<Sixth/> component has <div .thankDiv> with <p> what includes `Если Вас заинтересовала моя кандидатура, то Вы можете связаться со мной несколькими способами:` text", () => {
		it("<div .thankDiv> has <p>", () => {
			expect(sixthComponent.find("p")).toHaveLength(1);
		});

		it("<div .thankDiv> has <p> with text", () => {
			expect(sixthComponent.find("p").text()).toEqual(
				"Если Вас заинтересовала моя кандидатура, то Вы можете связаться со мной несколькими способами:"
			);
		});
	});

	describe("<Sixth/> component has <div .linkDiv> with <a/> inside", () => {
		it("<div .linkDiv> has <a/>", () => {
			expect(sixthComponent.find(".linkDiv").find("a")).toHaveLength(2);
		});
	});
});
