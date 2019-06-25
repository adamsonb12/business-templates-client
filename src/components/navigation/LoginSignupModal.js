import React, { useState } from 'react';

import { Button } from '../common';
import Login from '../user/Login';

import '../../styles/nav/loginSignupModal.scss';
import EditUser from '../user/EditUser';

const LoginSignupModal = ({ closeModal }) => {
    const [loginSignup, toggleLoginSignup] = useState('login');

    return (
        <article>
            <section className="loginSignup">
                <Button
                    buttonClass={`buttonChoice ${loginSignup === 'login' ? 'active' : ''}`}
                    text="Login"
                    onClick={() => toggleLoginSignup('login')}
                />
                <Button
                    buttonClass={`buttonChoice ${loginSignup === 'signup' ? 'active' : ''}`}
                    text="Sign Up"
                    onClick={() => toggleLoginSignup('signup')}
                />
            </section>
            <section className="formSection">
                {loginSignup === 'login' && <Login closeModal={closeModal} />}
                {loginSignup === 'signup' && <EditUser closeModal={closeModal} newUser />}
                {/* options for login or create new */}
                {/* If login show that component, else show create account component */}
            </section>
        </article>
    );
};

export default LoginSignupModal;
