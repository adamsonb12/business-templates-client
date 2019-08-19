import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import { EmailField, Form, HugoButton, PasswordField } from '../common';

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
    // test loading here
    // material buttons
    // if loading disabled or pass loading to button
    // big loading or button loading?

    handleResult(event) {
        if (event.result === 'login-failed') {
            this.setState({ failed: true, loading: false });
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
        if (auth && auth.id && prevProps.auth === null) {
            console.log('we have auth');
            // TODO => test this with red
            this.setState({ loading: false, failed: false });
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
                    passwordId="loginPassword"
                />
                <section className="formFooter modalFormFooter">
                    <HugoButton text="Cancel" onClick={onFinish} color="secondary" />
                    <HugoButton text="Submit" type="submit" />
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
