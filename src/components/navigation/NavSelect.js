import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import * as actions from '../../actions/auth';

const NavSelect = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { auth } = props;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        const { logout } = props;
        logout();
        handleClose();
    };

    return (
        <Fragment>
            <Button aria-controls="accountMenu" aria-haspopup="true" onClick={handleClick}>
                {auth.name_first || auth.email}
            </Button>
            <Menu id="accountMenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <Link to={`/profile/${auth.id}`}>My Account</Link>
                </MenuItem>
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
        </Fragment>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(NavSelect);
