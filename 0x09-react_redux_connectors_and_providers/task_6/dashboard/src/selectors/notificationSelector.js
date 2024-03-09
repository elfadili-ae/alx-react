

export const filterTypeSelected = (data) => {
    return data.get('filter')
}

export const getNotifications = (data) => {
    return data.get('notifications');
}

export const getUnreadNotifications = (data) => {
    const notifs = data.notifications.get('messages');

    if (notifs) {
        const filtered = notifs
            .valueSeq()
            .filter((value) => value.get("isRead") === false);

        return filtered;
    }

    return notifs;
};