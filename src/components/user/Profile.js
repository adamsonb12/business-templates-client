import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';

const Profile = ({ id }) => {
    // check if is same user that is logged in. If so, then show that data and show more
    // If not, call get user and show data
    return (
        <div>
            <p>
                something
            </p>
        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(Profile);
