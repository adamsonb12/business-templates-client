import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/auth';
import { Button, Modal } from '../common';
import LoginSignupModal from './LoginSignupModal';
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
                    <Button
                        buttonClass="action"
                        text="Login/Sign Up"
                        onClick={() => updateModalStatus(true)}
                    />
                )}
            </div>
            <Modal isOpen={modalOpen}>
                <LoginSignupModal closeModal={() => updateModalStatus(false)} />
            </Modal>
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
