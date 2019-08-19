import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Dropdown = ({ dropdownClass, inputId, label, onChange, options, value }) => (
    <FormControl className={dropdownClass}>
        <InputLabel htmlFor={inputId}>{label}</InputLabel>
        <NativeSelect
            value={value}
            onChange={onChange}
            input={<Input name={inputId} id={inputId} required />}
        >
            <option value="" />
            {options
                && Object.keys(options).map(key => (
                    <option key={key} value={key}>
                        {options[key]}
                    </option>
                ))}
        </NativeSelect>
    </FormControl>
);

Dropdown.defaultProps = { dropdownClass: 'dropdown', inputId: 'custom-dropdown' };

Dropdown.propTypes = {
    dropdownClass: PropTypes.string,
    inputId: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
};

export default Dropdown;
