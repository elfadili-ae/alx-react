import notificationReducer, { initialState } from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";


describe('notificationReducer testcases', () => {
    it('verifies notificationReducer returns data passed', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1, type: "default", value: "New course available"
                },
                {
                    id: 2, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, type: "urgent", value: "New data available"
                }
            ]
        };
        const expected = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1, isRead: false, type: "default", value: "New course available"
                },
                {
                    id: 2, isRead: false, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, isRead: false, type: "urgent", value: "New data available"
                }
            ]
        };

        expect(notificationReducer(initialState, action)).toEqual(expected);
    });

    it('verifies notificationReducer marks notification as read', () => {
        const action = {
            type: MARK_AS_READ, index: 2
        };
        const state = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1, isRead: false, type: "default", value: "New course available"
                },
                {
                    id: 2, isRead: false, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, isRead: false, type: "urgent", value: "New data available"
                }
            ]
        };
        const expected = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1, isRead: false, type: "default", value: "New course available"
                },
                {
                    id: 2, isRead: true, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, isRead: false, type: "urgent", value: "New data available"
                }
            ]
        };

        expect(notificationReducer(state, action)).toEqual(expected);
    });

    it('verifies notificationReducer sets filter type', () => {
        const action = {
            type: SET_TYPE_FILTER, filter: "URGENT"
        };
        const state = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1, isRead: false, type: "default", value: "New course available"
                },
                {
                    id: 2, isRead: false, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, isRead: false, type: "urgent", value: "New data available"
                }
            ]
        };
        const expected = {
            filter: "URGENT",
            notifications: [
                {
                    id: 1, isRead: false, type: "default", value: "New course available"
                },
                {
                    id: 2, isRead: false, type: "urgent", value: "New resume available"
                },
                {
                    id: 3, isRead: false, type: "urgent", value: "New data available"
                }
            ]
        };

        expect(notificationReducer(state, action)).toEqual(expected);
    })
})