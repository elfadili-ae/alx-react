import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";
import { Map } from 'immutable';

export const initialState = {
    notifications: [],
    filter: 'DEFAULT'
};

export default function notificationReducer(state = Map(initialState), action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const normalizedNotifs = notificationsNormalizer(action.data);
            Object.keys(normalizedNotifs.notifications).map((key) => {
                normalizedNotifs.notifications[key].isRead = false;
            });
            return state.merge(normalizedNotifs);
        }

        case MARK_AS_READ: {
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        }

        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }

        default:
            break;
    }

    return state;
}