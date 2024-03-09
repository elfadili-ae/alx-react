import { SET_TYPE_FILTER, MARK_AS_READ, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index: index
    }
}

export const setLoadingState = (loading) => {
    return {
        type: SET_LOADING_STATE,
        loading,
    }
}

export const setNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    }
}

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch("./notifications.json")
            .then((res) => res.json())
            .then((data) => dispatch(setNotifications(data)))
            .catch((error) => { })
            .finally(() => dispatch(setLoadingState(false)));
    };
};

export const boundMarkAsRead = (index) => { markAsAread(index) };

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    }
}

export const boundSetNotificationFilter = (filter) => { setNotificationFilter(filter) };