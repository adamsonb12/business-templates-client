import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import * as actions from '../../actions/user';
import {
    Dropdown,
    EmailField,
    Form,
    HugoButton,
    PasswordField,
    PhoneInput,
    TextInput,
} from '../common';
import GENDERS from '../../utils/constants/genders';

const EditUser = (props) => {
    const { createUser, editUser, formValues = {}, newUser, onFinish, submitEdit, user_id } = props;
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
    const [gender, updateGender] = useState(startingGender || Object.keys(GENDERS)[0]);

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
            <Dropdown
                inputId="edit-user-gender"
                label="Gender"
                onChange={e => updateGender(e.target.value)}
                options={GENDERS}
                value={gender}
            />
            <PhoneInput
                inputId="edit-user-phone"
                label="Phone Number (Optional)"
                onChange={e => updatePhone(e.target.value)}
                value={phone}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-of-birth"
                    label={dateOfBirth ? '' : 'Date of Birth (Optional)'}
                    value={dateOfBirth}
                    onChange={date => updateDateOfBirth(date)}
                    KeyboardButtonProps={{ 'aria-label': 'change date' }}
                />
            </MuiPickersUtilsProvider>
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
