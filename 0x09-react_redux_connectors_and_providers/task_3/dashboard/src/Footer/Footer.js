import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css'
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const Footer = ({ user }) => {
    // const { user } = React.useContext(AppContext);

    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {user.isLoggedIn && (
                <p><a href='#'>Contact us</a></p>
            )}
        </div>
    )
}

Footer.defaultProps = {
    user: null
}

Footer.propTypes = {
    user: propTypes.object,
}

// export default Footer;

export const mapStateToProps = (state) => {
    return {
        user: state.get('user'),
    }
}

export default connect(mapStateToProps, null)(Footer);