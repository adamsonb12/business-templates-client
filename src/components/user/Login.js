import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import { Button } from '../common';

import '../../styles/user/login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        const { auth, closeModal } = this.props;
        if (auth && auth.id && prevProps.auth === null) {
            closeModal();
        }
    }

    updateEmail(email) {
        this.setState({ email });
    }

    updatePassword(password) {
        this.setState({ password });
    }

    login(email, password, event) {
        event.preventDefault();
        const { login } = this.props;
        login(email, password);
        // TODO loading or something to show user we are trying to log them in
        // TODO on fail, show error message or feedback
    }

    render() {
        const { closeModal } = this.props;
        const { email, password } = this.state;

        return (
            <form id="loginForm" onSubmit={e => this.login(email, password, e)}>
                <div className="inputWithLabel">
                    <label htmlFor="email">
                        Email
                        <input
                            id="emailInput"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => this.updateEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                        />
                    </label>
                </div>
                <div className="inputWithLabel">
                    <label htmlFor="password">
                        Password
                        <input
                            id="passwordInput"
                            type="password"
                            name="password"
                            value={password}
                            minLength={8}
                            onChange={e => this.updatePassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </label>
                </div>
                <section className="closeModal">
                    <Button buttonClass="cancel" text="Cancel" onClick={closeModal} />
                    <Button buttonClass="action" text="Do It -The Senate" buttonType="submit" />
                </section>
            </form>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(
    mapStateToProps,
    actions,
)(Login);
