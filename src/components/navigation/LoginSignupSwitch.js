import React, { useState } from 'react';

import { Tabs } from '../common';
import Login from '../user/Login';
import EditUser from '../user/EditUser';

const LoginSignupSwitch = ({ closeModal }) => (
    <Tabs
        tabs={[
            { title: 'Login', content: () => <Login onFinish={closeModal} /> },
            { title: 'Sign Up', content: () => <EditUser onFinish={closeModal} newUser /> },
        ]}
    />
);

export default LoginSignupSwitch;
