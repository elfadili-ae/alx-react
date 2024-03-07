import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("App testcases", () => {
    it("verifies mapStateToProps returns the right data from user Login", () => {
        let state = fromJS({
            isUserLoggedIn: true,
        });

        const result = mapStateToProps(state);

        expect(result).toEqual({ isLoggedIn: true });
    });

    it("verifies mapStateToProps returns the right data from display Drawer", () => {
        let state = fromJS({
            isNotificationDrawerVisible: true,
        });

        const result = mapStateToProps(state);

        expect(result).toEqual({ displayDrawer: true });
    });
});