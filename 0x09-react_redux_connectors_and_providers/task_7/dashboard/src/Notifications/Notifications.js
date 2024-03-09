import React from 'react'
import Close from '../assets/close.png'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'
// import NotificationItemShape from './NotificationItemShape'
import { StyleSheet, css } from 'aphrodite/no-important'
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators'
import { connect } from 'react-redux'
import { getUnreadNotifications } from '../selectors/notificationSelector'

const fadeInkeyFrames = {
    'from': {
        opacity: '0.5'
    },
    'to': {
        opacity: '1'
    }
}

const bouncingKeyFrames = {
    '0%': {
        transform: 'translateY(0)'
    },
    '25%': {
        transform: 'translateY(5px)'
    },
    '50%': {
        transform: 'translateY(-5px)'
    },
    '75%': {
        transform: 'translateY(5px)'
    },

}


const styles = StyleSheet.create({
    notifHolder: {
        paddingRight: '8px',
        paddingTop: '8px',
        position: 'absolute',
        right: '0',
    },
    menuItem: {
        marginBottom: '4px',
        textAlign: 'right'
    },
    ContainerShown: {
        display: 'block',
        '@media (max-width: 950px)': {
            width: '99vw',
            height: '100vh',
            top: '0',
            left: '0',
            borderStyle: 'none',
            zIndex: '2',
            backgroundColor: 'white',
        }
    },
    containerHidden: {
        display: 'none',
        '@media (max-width: 950px)': {
            display: 'none',
        }
    },
    Notifications: {
        position: 'relative',
        margin: '0',
        padding: '4px',
        paddingRight: '24px',
        border: '2px solid rgb(97, 80, 255)',
        borderStyle: 'dashed',
        '@media (max-width: 950px)': {
            borderStyle: 'none',
            fontSize: '20px',
        }
    },
    p: {
        margin: '0',
        padding: '0',
        marginTop: '4px',
        ':hover': {
            animationName: [bouncingKeyFrames, fadeInkeyFrames],
            animationDuration: '1s',
            animationIterationCount: 'infinite',
        }
    },
    ul: {
        '@media (max-width: 950px)': {
            padding: '0',
            listStyleType: 'none'
        }
    }
})


class Notif extends React.Component {
    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this);
        this.closebBtn = this.closebBtn.bind(this);
    }

    state = {
        isVisible: false
    };

    btnClicked() {
        this.props.handleDisplayDrawer();
        this.setState(prevState => ({
            isVisible: true
        }));
    }

    closebBtn() {
        this.props.handleHideDrawer();
        this.setState(prevState => ({
            isVisible: false
        }));
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        const {
            displayDrawer,
            listNotifications,
            handleDisplayDrawer,
            handleHideDrawer,
            markNotificationAsRead,
        } = this.props;

        return <div className={css(styles.notifHolder)}>
            <div className={css(styles.menuItem)}>
                <p className={!this.state.isVisible ? css(styles.p) : css(styles.containerHidden)} onClick={this.btnClicked}>Your notifications</p>
            </div>
            {displayDrawer ? (
                <div className={this.state.isVisible ? css(styles.ContainerShown) : css(styles.containerHidden)} >
                    <div className={css(styles.Notifications)}>
                        <p className={css(styles.p)}>Here is the list of notifications</p>
                        <button aria-label='Close' onClick={this.closebBtn} style={{ position: 'absolute', right: '1px', top: '4px', background: 'none', border: 'none' }}>
                            <img src={Close} width={'25px'} alt='close button' />
                        </button>
                        <ul className={css(styles.ul)}>
                            {listNotifications.length === 0 ? (
                                <NotificationItem type="default" value="No new notification for now" />
                            ) : (
                                // this.props.listNotifications.map((v, idx) =>
                                //     <NotificationItem key={v.id} type={v.type} value={v.value} html={v.html} markAsRead={this.props.markNotificationAsRead} id={v.id} />
                                // )
                                listNotifications.valueSeq().map((notification) => {
                                    let html = notification.get("html");

                                    if (html) html = html.toJS();

                                    return (
                                        <NotificationItem
                                            key={notification.get("guid")}
                                            id={notification.get("guid")}
                                            type={notification.get("type")}
                                            value={notification.get("value")}
                                            html={html}
                                            markAsRead={markNotificationAsRead}
                                        />
                                    );
                                })
                            )}
                        </ul>
                    </div >
                </div>
            ) : (
                null
            )
            }
        </div>
    }
}

Notif.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.object,
    handleDisplayDrawer: propTypes.func,
    handleHideDrawer: propTypes.func,
    markNotificationAsRead: propTypes.func,
}

Notif.defaultProps = {
    displayDrawer: false,
    listNotifications: null,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    markNotificationAsRead: () => { },
    fetchNotifications: () => { },
}

// export default Notif;
const mapStateToProps = (state) => {
    const unreadNotifs = getUnreadNotifications(state);
    return {
        listNotifications: unreadNotifs,
    };
};

const mapDispatchToProps = {
    fetchNotifications,
    markNotificationAsRead: markAsAread
};

export default connect(mapStateToProps, mapDispatchToProps)(Notif);