import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/common/forms.scss';

const Form = ({ formId, formClass, onSubmit, children }) => (
    <form id={formId} className={formClass} onSubmit={onSubmit}>
        {children}
    </form>
);

Form.defaultProps = { formClass: 'standardForm' };

Form.propTypes = {
    formId: PropTypes.string.isRequired,
    formClass: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
