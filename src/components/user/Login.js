import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import { Button, EmailField, Form, PasswordField } from '../common';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            failed: false,
            loading: false,
        };
    }

    // If auth and success event is fired then close modal and send to home page logged in
    // if fail => invalid information errors
    // test loading here

    handleResult(event) {
        const { onFinish } = this.props;
        switch (event.result) {
            case 'login-failed':
                this.setState({ failed: true, loading: false });
                break;
            case 'login-success':
                // this.setState({ failed: false, loading: false });
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener('login-result', this.handleResult.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('login-result', this.handleResult.bind(this));
    }

    componentDidUpdate(prevProps) {
        const { auth, onFinish } = this.props;
        console.log('hwo', auth);
        if (auth && auth.id && prevProps.auth === null) {
            console.log('we have auth');
            onFinish();
        }
    }

    updateEmail(email) {
        this.setState({ email, failed: false });
    }

    updatePassword(password) {
        this.setState({ password, failed: false });
    }

    login(email, password, event) {
        event.preventDefault();
        this.setState({ loading: true });
        const { login } = this.props;
        login(email, password);
    }

    render() {
        const { onFinish } = this.props;
        const { email, password, failed } = this.state;

        return (
            <Form formId="loginForm" onSubmit={e => this.login(email, password, e)}>
                <EmailField
                    value={email}
                    onChange={e => this.updateEmail(e.target.value)}
                    error={failed}
                />
                <PasswordField
                    value={password}
                    onChange={e => this.updatePassword(e.target.value)}
                    error={failed}
                />
                <section className="formFooter loginFormFooter">
                    <Button buttonClass="cancel" text="Cancel" onClick={onFinish} />
                    <Button buttonClass="action" text="Submit" buttonType="submit" />
                </section>
            </Form>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

Login.propTypes = { onFinish: PropTypes.func.isRequired };

export default connect(
    mapStateToProps,
    actions,
)(Login);
