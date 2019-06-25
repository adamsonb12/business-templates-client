import { LOGIN, CREATE_USER, EDIT_USER } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case CREATE_USER:
        case EDIT_USER:
        case LOGIN:
            // TODO => check session stuff to see if already logged in, if so get user data ??
            if (action.payload && action.payload._id) {
                return action.payload;
            }
            return null;
        default:
            return state;
    }
}
