import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/user';
import { EmailField, Form, HugoButton, PasswordField, TextInput } from '../common';

const EditUser = (props) => {
    const {
        createUser,
        editUser,
        formValues = {},
        newUser,
        onFinish,
        submitEdit,
        user_id,
    } = props;
    const {
        startingEmail,
        startingNameFirst,
        startingNameLast,
        startingNameMiddle,
        startingPhone,
        startingDateOfBirth,
        startingGender,
    } = formValues;
    // Fields
    const [email, updateEmail] = useState(startingEmail || '');
    const [password, updatePassword] = useState('');
    const [confirmPassword, updateConfirmPassword] = useState('');
    const [nameFirst, updateNameFirst] = useState(startingNameFirst || '');
    const [nameLast, updateNameLast] = useState(startingNameLast || '');
    const [nameMiddle, updateNameMiddle] = useState(startingNameMiddle || '');
    const [phone, updatePhone] = useState(startingPhone || '');
    const [dateOfBirth, updateDateOfBirth] = useState(startingDateOfBirth || '');
    const [gender, updateGender] = useState(startingGender || 'male');

    // Validations
    const [matchingPasswords, updateMatchingPasswords] = useState(true);

    const checkMatch = () => {
        if (password !== confirmPassword) {
            updateMatchingPasswords(false);
        } else {
            updateMatchingPasswords(true);
        }
    };

    const submitUser = (e) => {
        e.preventDefault();

        // go try to create the user (confirm email isn't already in use before losing state.)
        if (newUser) {
            if (password !== confirmPassword) {
                updateMatchingPasswords(false);
            } else {
                createUser({
                    email,
                    password,
                    nameFirst,
                    nameLast,
                    nameMiddle,
                    phone,
                    dateOfBirth,
                    gender,
                });
            }
        } else {
            const updatedData = { id: user_id };
            if (email !== startingEmail) {
                updatedData.email = email;
            }
            if (nameFirst !== startingNameFirst) {
                updatedData.name_first = nameFirst;
            }
            if (nameLast !== startingNameLast) {
                updatedData.name_last = nameLast;
            }
            if (nameMiddle !== startingNameMiddle) {
                updatedData.name_middle = nameMiddle;
            }
            if (phone !== startingPhone) {
                updatedData.phone = phone;
            }
            if (dateOfBirth !== startingDateOfBirth) {
                updatedData.date_birth = dateOfBirth;
            }
            if (gender !== startingGender) {
                updatedData.gender = gender;
            }
            if (updatedData && Object.keys(updatedData).length > 0) {
                editUser(updatedData);
                submitEdit();
            }
        }
    };

    return (
        <Form formId="editUser" onSubmit={() => console.log('we are here')}>
            <EmailField
                value={email}
                onChange={e => updateEmail(e.target.value)}
                required
                emailId="edit-user-email"
            />
            {newUser && (
                <Fragment>
                    <PasswordField
                        value={password}
                        onChange={e => updatePassword(e.target.value)}
                        passwordId="edit-user-password"
                        required
                    />
                    <PasswordField
                        label="Confirm Password"
                        onChange={e => updateConfirmPassword(e.target.value)}
                        passwordId="edit-user-confirm-password"
                        required
                        value={confirmPassword}
                    />
                </Fragment>
            )}
            <TextInput
                inputId="edit-user-first-name"
                label="First Name"
                minLength={1}
                onChange={e => updateNameFirst(e.target.value)}
                required
                value={nameFirst}
            />
            <TextInput
                inputId="edit-user-middle-name"
                label="Middle Name"
                minLength={1}
                onChange={e => updateNameMiddle(e.target.value)}
                value={nameMiddle}
            />
            <TextInput
                inputId="edit-user-last-name"
                label="Last Name"
                minLength={1}
                onChange={e => updateNameLast(e.target.value)}
                required
                value={nameLast}
            />
            {/* TODO => commonize a select component */}
            <div className="inputWithLabel">
                <label htmlFor="gender">
                    Gender
                    <select
                        id="gender"
                        name="gender"
                        value={gender}
                        minLength={1}
                        onChange={e => updateGender(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
            {/* TODO => Phone Number Input ??? */}
            <div className="inputWithLabel">
                <label htmlFor="phone">
                    Phone Number (Optional)
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={phone}
                        minLength={1}
                        onChange={e => updatePhone(e.target.value)}
                        placeholder="Format: 123-456-7890"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </label>
            </div>
            {/* TODO => DATE INPUT */}
            <div className="inputWithLabel">
                <label htmlFor="dateOfBirth">
                    Date of Birth (Optional)
                    <input
                        id="dateOfBirth"
                        type="date"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        minLength={1}
                        onChange={e => updateDateOfBirth(e.target.value)}
                    />
                </label>
            </div>
            <section className="formFooter modalFormFooter">
                <HugoButton text="Cancel" onClick={onFinish} color="secondary" />
                <HugoButton text="Submit" type="submit" />
            </section>
        </Form>
    );
};

export default connect(
    null,
    actions,
)(EditUser);
