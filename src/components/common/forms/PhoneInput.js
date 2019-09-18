import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../';

const PhoneInput = ({ error, inputClass, inputId, label, onChange, required, value }) => (
    <TextInput
        error={error}
        inputClass={inputClass}
        inputId={inputId}
        label={label}
        onChange={onChange}
        required={required}
        value={value}
    />
    // TODO => style the stuff below or find a better 3rd party one
    // <div className="inputWithLabel">
    //     <label htmlFor="phone">
    //         {label}
    //         <input
    //             id={inputId}
    //             type="tel"
    //             name="phone"
    //             value={value}
    //             minLength={1}
    //             onChange={onChange}
    //             placeholder="Format: 123-456-7890"
    //             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //         />
    //     </label>
    // </div>
);

PhoneInput.defaultProps = {
    error: false,
    fullWidth: true,
    inputClass: 'phoneInput',
    inputId: 'phone-input',
    label: 'Phone Number',
};

PhoneInput.propTypes = {
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    inputClass: PropTypes.string,
    inputId: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
};

export default PhoneInput;
