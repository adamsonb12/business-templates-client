import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as actions from '../../actions/auth';
import { Loading } from '../common';
import EditUser from './EditUser';

import '../../styles/user/profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = { edit: false, userData: null };

        this.editUser = this.editUser.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    async componentDidMount() {
        const {
            match: { params: { userId } },
            auth,
        } = this.props;
        const { userData } = this.state;
        if (!userData) {
            if (auth && userId && auth.id !== userId) {
                this.setState({ userData: auth });
            }
            const response = await axios.get(`/user?user_id=${userId}`);
            if (response && response.data && response.data.user) {
                this.setState({ userData: response.data.user });
            }
        }
    }

    editUser() {
        this.setState({ edit: true });
    }

    submitEdit() {
        this.setState({ edit: false });
    }

    render() {
        const { edit, userData } = this.state;
        const { auth } = this.props;
        console.log('auth', auth);
        if (userData) {
            const sameUser = auth && auth.id === userData.id;
            return (
                <article>
                    {sameUser && <h2>{`${edit ? 'Edit ' : ''}My Account`}</h2>}
                    {!edit && (
                        <section className="profileSection">
                            <div className="profileInfo">
                                <h5>Name</h5>
                                <p>
                                    {`${userData.name_first} ${userData.name_middle ? userData.name_middle : ''} ${
                                        userData.name_last
                                    }`}
                                </p>
                            </div>
                            <div className="profileInfo">
                                <h5>Email</h5>
                                <p>{userData.email}</p>
                            </div>
                            <div className="profileInfo">
                                <h5>Gender</h5>
                                <p>{userData.gender}</p>
                            </div>
                            {userData.date_birth && sameUser && (
                                <div className="profileInfo">
                                    <h5>Date of Birth</h5>
                                    <p>{userData.date_birth}</p>
                                </div>
                            )}
                            {userData.phone && sameUser && (
                                <div className="profileInfo">
                                    <h5>Phone</h5>
                                    <p>{userData.phone}</p>
                                </div>
                            )}
                            {sameUser && (
                                <Button variant="outlined" onClick={this.editUser}>
                                    Edit Account
                                </Button>
                            )}
                        </section>
                    )}
                    {edit && (
                        <EditUser
                            formValues={{
                                startingEmail: userData.email,
                                startingNameFirst: userData.name_first,
                                startingNameLast: userData.name_last,
                                startingNameMiddle: userData.name_middle || '',
                                startingPhone: userData.phone || '',
                                startingDateOfBirth: userData.date_birth || '',
                                startingGender: userData.gender,
                            }}
                            user_id={auth.id}
                            submitEdit={this.submitEdit}
                        />
                    )}
                </article>
            );
        }
        return <Loading />;
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(Profile);
