import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

export const initialState = {
    notifications: [],
    filter: 'default'
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const notifList = action.data.map((notif) => {
                return {
                    ...notif,
                    isRead: false
                }
            })
            return {
                filter: "DEFAULT",
                notifications: notifList
            }
        }

        case MARK_AS_READ: {
            state.notifications.map((element) => {
                if (element.id == action.index) element.isRead = true;
                return element;
            })
            return state;
        }

        case SET_TYPE_FILTER: {
            state.filter = action.filter;
            return state;
        }

        default:
            break;
    }

    return state;
}