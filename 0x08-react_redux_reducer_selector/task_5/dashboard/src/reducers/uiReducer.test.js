import uiReducer from "./uiReducer";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes"
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { initialState } from "./uiReducer";
import { Map } from 'immutable';

describe('uiReducer testcases', () => {
    it('verifies uiReducer return initial state', () => {
        expect(uiReducer().toJS()).toEqual(initialState);
    })

    it('verifies uiReducer return correct state for SELECT_COURSE ', () => {
        const res = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        }

        expect(uiReducer(initialState, SELECT_COURSE).toJS()).toEqual(res);
    })

    it('verifies uiReducer return correct state for DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual({ ...initialState, isNotificationDrawerVisible: true });
    })
})