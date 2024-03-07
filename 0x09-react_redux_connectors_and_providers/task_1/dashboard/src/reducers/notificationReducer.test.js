import notificationReducer, { initialState } from "./notificationReducer";
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";
import { fromJS } from "immutable";

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

        const normalizedData = notificationsNormalizer(action.data);
        const expectedData = {
            filter: 'DEFAULT',
            ...normalizedData,
        };
        expectedData.notifications[1].isRead = false;
        expectedData.notifications[2].isRead = false;
        expectedData.notifications[3].isRead = false;

        const state = notificationReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedData);
    });

    it('verifies notificationReducer marks notification as read', function () {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1, isRead: false, type: 'default', value: 'New course available',
                },
                {
                    id: 2, isRead: false, type: 'urgent', value: 'New resume available',
                },
                {
                    id: 3, isRead: false, type: 'urgent', value: 'New data available',
                },
            ],
        };

        initialState.notifications = notificationsNormalizer(
            initialState.notifications
        ).notifications;

        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const data = [
            {
                id: 1, type: 'default', value: 'New course available',
            },
            {
                id: 2, type: 'urgent', value: 'New resume available',
            },
            {
                id: 3, type: 'urgent', value: 'New data available',
            },
        ];

        const normalizedData = notificationsNormalizer(data);

        const expectedData = {
            filter: 'DEFAULT',
            ...normalizedData,
        };
        expectedData.notifications[1].isRead = false;
        expectedData.notifications[2].isRead = true;
        expectedData.notifications[3].isRead = false;

        const state = notificationReducer(fromJS(initialState), action);

        expect(state.toJS()).toEqual(expectedData);
    });
    it('verifies notificationReducer sets filter type', function () {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1, isRead: false, type: 'default', value: 'New course available',
                },
                {
                    id: 2, isRead: false, type: 'urgent', value: 'New resume available',
                },
                {
                    id: 3, isRead: false, type: 'urgent', value: 'New data available',
                },
            ],
        };

        initialState.notifications = notificationsNormalizer(
            initialState.notifications
        ).notifications;

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const data = [
            {
                id: 1, isRead: false, type: 'default', value: 'New course available',
            },
            {
                id: 2, type: 'urgent', isRead: false, value: 'New resume available',
            },
            {
                id: 3, type: 'urgent', isRead: false, value: 'New data available',
            },
        ];

        const normalizedData = notificationsNormalizer(data);

        const expectedData = {
            filter: 'URGENT',
            ...normalizedData,
        };

        const state = notificationReducer(fromJS(initialState), action);

        expect(state.toJS()).toEqual(expectedData);
    });
});