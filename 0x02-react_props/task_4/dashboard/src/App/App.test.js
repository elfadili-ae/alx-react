import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App tests", () => {
    it("renders without crashing", () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });

    it('verfies Notifications exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notif')).toHaveLength(1);
    });

    it('verfies Header exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('verfies Login exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('verfies Footer exists', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('verfies CourseList does not exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
});

describe('App isLoggedIn=true tests', () => {
    it('verfies CourseList exists', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });

    it('verfies Login does not exist', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
    });
});