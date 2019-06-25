import React from 'react';

import '../../styles/common/button.scss';

const Button = ({ buttonClass, text, onClick, buttonType = 'button' }) => (
    <button className={buttonClass} onClick={onClick} type={buttonType}>
        {text}
    </button>
);

export default Button;
