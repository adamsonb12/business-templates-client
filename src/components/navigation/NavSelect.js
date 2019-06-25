import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import * as actions from '../../actions/auth';

const NavSelect = (props) => {
    const { auth } = props;

    const handleClick = (e) => {
        const { value } = e.target;
        const { logout } = props;
        if (value === 'logout') {
            logout();
        }
    };

    console.log('auth', auth);

    return (
        <Select id="accountSelect" value="label" onChange={handleClick}>
            <MenuItem value="label" disabled>
                {auth.name_first || auth.email}
            </MenuItem>
            <MenuItem value="account">
                <Link to={`/profile/${auth._id}`}>My Account</Link>
            </MenuItem>
            <MenuItem value="logout">Logout</MenuItem>
        </Select>
        // <select id="accountSelect" value="label" onChange={handleClick}>
        //     <option value="label" disabled>
        //         {auth.name_first || auth.email}
        //     </option>
        //     {/* TODO link the following option using react router and send user to user page */}
        //     <option value="account">
        //         {/* <Link to={`/profile/${auth._id}`}>My Account</Link> */}
        //         <a>da fu</a>
        //     </option>
        //     <option value="logout">Logout</option>
        // </select>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(NavSelect);
