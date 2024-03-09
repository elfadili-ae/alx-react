import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes"
import { Map } from 'immutable';

export const initialUiState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export default function uiReducer(state = initialUiState, action) {
    const immutableState = Map(state);

    if (action) {
        switch (action.type) {
            case DISPLAY_NOTIFICATION_DRAWER:
                {
                    return immutableState.set('isNotificationDrawerVisible', true);
                }
            case HIDE_NOTIFICATION_DRAWER:
                {
                    return immutableState.set('isNotificationDrawerVisible', false);
                }
            case LOGIN:
                {
                    return immutableState.set('user', action.user);
                }
            case LOGIN_SUCCESS:
                {
                    return immutableState.set('isUserLoggedIn', true);
                }

            case LOGIN_FAILURE:
                {
                    return immutableState.set('isUserLoggedIn', false);
                }
            case LOGOUT:
                {
                    return immutableState.set('isUserLoggedIn', false).set('user', null);
                }
            default: {
                break;
            }
        }

    }
    return immutableState;
}