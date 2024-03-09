import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";
import { Map } from 'immutable';

export const initialNotifState = {
    notifications: [],
    filter: 'DEFAULT',
    loading: false
};

export default function notificationReducer(state = Map(initialNotifState), action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const normalizedNotifs = notificationsNormalizer(action.data);
            Object.keys(normalizedNotifs.notifications).map((key) => {
                normalizedNotifs.notifications[key].isRead = false;
            });
            return state.mergeDeep(normalizedNotifs);
        }

        case MARK_AS_READ: {
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        }

        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }

        case SET_LOADING_STATE:
            {
                return state.set("loading", action.loading);
            }
        default:
            break;
    }

    return state;
}