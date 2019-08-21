import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextArea = ({ defaultValue, id, label, onChange, required, rows, rowsMax, value }) => (
    <div className="inputWithLabel">
        <label hrmlFor={id}>
            {value && label}
            <TextareaAutosize
                defaultValue={defaultValue}
                id={id}
                onChange={onChange}
                placeholder={!value && label}
                required={required}
                rows={rows}
                rowsMax={rowsMax}
                value={value}
            />
        </label>
    </div>
);

TextArea.defaultProps = {
    rows: 5,
    rowsMax: 5,
};

TextArea.propTypes = {
    defaultValue: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    value: PropTypes.string.isRequired,
};

export default TextArea;
