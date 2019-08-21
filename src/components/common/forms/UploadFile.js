import React from 'react';
import PropTypes from 'prop-types';

const UploadFile = ({ id, label, onChange, required, value }) => (
    <div className="inputWithLabel uploadFile">
        <label htmlFor={id}>
            {label}
            <input
                id={id}
                name="file"
                onChange={onChange}
                required={required}
                type="file"
                value={value}
            />
        </label>
    </div>
);

UploadFile.defaultProps = { label: 'File' };

UploadFile.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string,
};

export default UploadFile;
