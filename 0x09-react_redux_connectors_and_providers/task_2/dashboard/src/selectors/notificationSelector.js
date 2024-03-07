

export const filterTypeSelected = (data) => {
    return data.get('filter')
}

export const getNotifications = (data) => {
    return data.get('notifications');
}

export const getUnreadNotifications = (data) => {
    const notifs = Object.values(data.get('notifications').toJS());
    return notifs.filter((element) => {
        return element.isRead === true;
    })
}