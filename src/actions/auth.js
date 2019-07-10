import axios from 'axios';

import { LOGIN, LOGOUT } from './types';

// Auth Actions
export const login = (email, password) => async (dispatch) => {
    // TODO get env variable
    const url = '/login';
    const response = await axios({
        method: 'post',
        url,
        data: {
            email,
            password,
        },
    });
    const user = response.data && response.data.user ? response.data.user : null;
    dispatch({
        type: LOGIN,
        payload: user,
    });
};

export const logout = () => async (dispatch) => {
    // TODO get env variable for url
    const url = '/logout';
    await axios({
        method: 'post',
        url,
    });
    dispatch({ type: LOGOUT });
    // TODO => with react router is there a better way to do this?
    window.location = '/';
};
