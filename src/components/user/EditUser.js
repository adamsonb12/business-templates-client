import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/user';
import { Button, Form, PasswordField } from '../common';

const EditUser = (props) => {
    const {
        newUser,
        closeModal,
        formValues = {},
        createUser,
        editUser,
        user_id,
        submitEdit,
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
            <PasswordField value={password} onChange={e => updatePassword(e.target.value)} />
        </Form>
    );

    return (
        <form id="editUser" onSubmit={submitUser}>
            <div className="inputWithLabel">
                <label htmlFor="email">
                    Email
                    <input
                        id="emailInput"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => updateEmail(e.target.value)}
                        required
                        placeholder="Enter your email address"
                    />
                </label>
            </div>
            {newUser && (
                <Fragment>
                    <div className="inputWithLabel">
                        <label htmlFor="password">
                            Password
                            <input
                                id="passwordInput"
                                type="password"
                                name="password"
                                value={password}
                                minLength={8}
                                onChange={e => updatePassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </label>
                    </div>
                    <div className="inputWithLabel">
                        <label htmlFor="confirmPasswordInput">
                            Confirm Password
                            <input
                                id="confirmPasswordInput"
                                type="password"
                                name="password"
                                value={confirmPassword}
                                minLength={8}
                                onChange={e => updateConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm your password"
                                className={`${!matchingPasswords ? 'invalid' : ''}`}
                                onBlur={checkMatch}
                            />
                        </label>
                    </div>
                </Fragment>
            )}
            <div className="inputWithLabel">
                <label htmlFor="nameFirst">
                    First Name
                    <input
                        id="nameFirst"
                        type="text"
                        name="nameFirst"
                        value={nameFirst}
                        minLength={1}
                        onChange={e => updateNameFirst(e.target.value)}
                        required
                        placeholder="Enter your first name"
                    />
                </label>
            </div>
            <div className="inputWithLabel">
                <label htmlFor="nameMiddle">
                    Middle Name (Optional)
                    <input
                        id="nameMiddle"
                        type="text"
                        name="nameMiddle"
                        value={nameMiddle}
                        minLength={1}
                        onChange={e => updateNameMiddle(e.target.value)}
                        placeholder="Enter your middle name"
                    />
                </label>
            </div>
            <div className="inputWithLabel">
                <label htmlFor="nameLast">
                    Last Name
                    <input
                        id="nameLast"
                        type="text"
                        name="nameLast"
                        value={nameLast}
                        minLength={1}
                        onChange={e => updateNameLast(e.target.value)}
                        required
                        placeholder="Enter your last name"
                    />
                </label>
            </div>
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
            <section className="closeModal">
                <Button buttonClass="cancel" text="Cancel" onClick={closeModal} />
                <Button buttonClass="action" text="Do It -The Senate" buttonType="submit" />
            </section>
        </form>
    );
};

export default connect(
    null,
    actions,
)(EditUser);
