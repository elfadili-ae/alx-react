import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotifications, markAsAread, setNotificationFilter, } from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import Notifications from "./Notifications";
import propTypes from "prop-types";

export class NotificationsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        return <Notifications {...this.props}></Notifications>;
    }
}

NotificationsContainer.defaultProps = {
    displayDrawer: false,
    fetchNotifications: () => { },
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    listNotifications: null,
    markNotificationAsRead: () => { },
    setNotificationFilter: () => { },
};

NotificationsContainer.propTypes = {
    displayDrawer: propTypes.bool,
    fetchNotifications: propTypes.func,
    handleDisplayDrawer: propTypes.func,
    handleHideDrawer: propTypes.func,
    listNotifications: propTypes.object,
    markNotificationAsRead: propTypes.func,
    setNotificationFilter: propTypes.func,
};

const mapStateToProps = (state) => {
    const unreadNotificationsByType = getUnreadNotificationsByType(state);

    return {
        listNotifications: unreadNotificationsByType,
    };
};

const mapDispatchToProps = {
    fetchNotifications,
    markNotificationAsRead: markAsAread,
    setNotificationFilter,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsContainer);