import React from "react";
import { shallow } from "enzyme";
import { Fourth } from "../Components/index.js";

describe("Tests of <Third/> component", () => {
	let fourthComponent;
	beforeEach(() => {
		fourthComponent = shallow(<Fourth />);
	});
	afterEach(() => {
		fourthComponent = null;
	});
	describe("first render of <Fourth/> component", () => {
		it("<Fourth/> component renders properly", () => {
			expect(fourthComponent).not.toBeNull();
			expect(fourthComponent.debug()).toMatchSnapshot();
		});
	});

	describe("<Fourth/> component renders elements inside itself", () => {
		it("<Fourth/> component has elements inside", () => {
			expect(fourthComponent.find(".pantsDiv").children()).toHaveLength(
				2
			);
			expect(
				fourthComponent.find(".pantsDiv").last().find("h1").text()
			).toEqual("Выполненный проект");
		});
	});

	describe("checking <Fourth/> component`s props", () => {
		describe("<Third/> wihout props", () => {
			it("without props <Third/> component hasn`t <p> in <div .rightDescriptionDiv>", () => {
				expect(
					fourthComponent.find(".rightDescriptionDiv").find("p")
				).toHaveLength(0);
			});
		});
	});
});
