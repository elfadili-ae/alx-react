import React from 'react'
import logo from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import propTypes, { object } from 'prop-types';

const styles = StyleSheet.create({
    AppHeader: {
        backgroundColor: '#ffffff',
        height: '24vh',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 'calc(6px + 2vmin)',
        color: 'rgba(233, 37, 37, 0.894)',
        borderBottom: '2px solid rgba(233, 37, 37, 0.894)',
        padding: '10px 5px'
    },
    logo: {
        width: '140px',
        height: '140px'
    },
    welcome: {
        marginTop: '20px',
        marginLeft: '20px'
    }
});

const Header = ({ user, logout }) => {
    return (
        <>
            <header className={css(styles.AppHeader)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1>School dashboard</h1>
            </header>
            {user.isLoggedIn && (
                <section className={css(styles.welcome)} id="logoutSection">
                    Welcome<strong> {user.email} </strong>
                    <em>
                        <a href="#" onClick={logout}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
        </>
    )
}

Header.defaultProps = {
    user: null,
    logout: () => { }
}

Header.propTypes = {
    user: object,
    logout: propTypes.func
}

// export default Header

const mapStateToProps = (state) => {
    return {
        user: state.get('user')
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);