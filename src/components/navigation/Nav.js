import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/auth';
import { HugoButton, StandardDialogue } from '../common';
import LoginSignupSwitch from './LoginSignupSwitch';
import NavSelect from './NavSelect';

import '../../styles/nav/navbar.scss';

const Nav = (props) => {
    const [modalOpen, updateModalStatus] = useState(false);
    const { auth } = props;

    return (
        <nav>
            <Link to="/">Icon</Link>
            <div>
                {auth && auth.id && <NavSelect />}
                {!auth && (
                    <HugoButton
                        text="Login/Sign Up"
                        onClick={() => updateModalStatus(true)}
                    />
                )}
            </div>
            <StandardDialogue
                open={modalOpen}
                closeModal={() => updateModalStatus(false)}
                customFooter
            >
                <LoginSignupSwitch closeModal={() => updateModalStatus(false)} />
            </StandardDialogue>
        </nav>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(Nav);
