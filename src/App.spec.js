import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";


describe("<App />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});