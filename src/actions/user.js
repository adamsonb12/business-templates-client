import axios from 'axios';

import { login } from './auth';
import { CREATE_USER, EDIT_USER } from './types';

export const createUser = userData => async (dispatch) => {
    const { email, password, nameFirst, nameLast, nameMiddle, phone, dateOfBirth, gender } = userData;
    // TODO get from env variable
    const url = '/user';
    console.log(email);
    const data = { email, password, name_first: nameFirst, name_last: nameLast, gender };
    if (phone) {
        data.phone_number = phone;
    }
    if (dateOfBirth) {
        data.date_birth = dateOfBirth;
    }
    if (nameMiddle) {
        data.name_middle = nameMiddle;
    }
    try {
        const response = await axios({
            method: 'post',
            url,
            data,
        });
        // TODO Handle Response Errors (Email already exists etc)
        // Throw dispatch an event (maybe normal way, not for reducer)
        // Add watch for events in component that watches for the error event, and displays the right error message based of event, make sure to unsubscribe on Unmount
        console.log('response', response);
        const newUser = response.data.user;
        dispatch({
            type: CREATE_USER,
            payload: newUser,
        });
        if (newUser) {
            dispatch(login(newUser.email, password));
        }
    } catch (err) {
        console.error(err);
    }
};

export const editUser = userData => async (dispatch) => {
    const { id } = userData;
    // TODO get from env variable
    const url = '/user';
    const data = {};
    data.user_id = id;
    Object.keys(userData).forEach((key) => {
        if (key === 'id') {
            data.user_id = userData[key];
        } else if (userData[key]) {
            data.options[key] = userData[key];
        }
    });
    if (data.id && data.options && Object.keys(data.options).length > 0) {
        const response = axios({
            method: 'put',
            url,
            data,
        });
        const updatedUser = response.data;
        dispatch({
            type: EDIT_USER,
            payload: updatedUser,
        });
    } else {
        // through the errors base
        console.error('Invalid Data to Edit a User Object');
    }
};
