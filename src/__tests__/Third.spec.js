import React from "react";
import { shallow } from "enzyme";
import { Third } from "../Components/index.js";

describe("Tests of <Third/> component", () => {
	let thirdComponent;
	beforeEach(() => {
		thirdComponent = shallow(<Third />);
	});
	afterEach(() => {
		thirdComponent = null;
	});
	describe("first render of <Third/> component", () => {
		it("<Third> component renders properly", () => {
			expect(thirdComponent).not.toBeNull();
			expect(thirdComponent.debug()).toMatchSnapshot();
		});
	});

	describe("<Third/> component renders elements inside itself", () => {
		it("<Third/> component has elements inside", () => {
			expect(thirdComponent.find(".karateDiv").children()).toHaveLength(
				2
			);
			expect(
				thirdComponent.find(".karateDiv").last().find("h1").text()
			).toEqual("Примеры выполненных эскизов на тему : ");
		});
	});

	describe("checking <Third/> component`s props", () => {
		describe("<Third/> wihout props", () => {
			it("without props <Third/> component hasn`t <p> in <div .rightDescriptionDiv>", () => {
				expect(
					thirdComponent.find(".rightDescriptionDiv").find("p")
				).toHaveLength(0);
			});
		});
	});
});
