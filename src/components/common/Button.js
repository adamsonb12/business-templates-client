import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export const HugoButton = ({
    color,
    disabled,
    href,
    loading,
    loadingColor,
    onClick,
    text,
    type,
    variant,
}) => (
    <Button
        color={color}
        variant={variant}
        href={href}
        disabled={disabled}
        type={type}
        onClick={onClick}
    >
        {loading ? <CircularProgress color={loadingColor} /> : text}
    </Button>
);

Button.defaultProps = {
    color: 'primary',
    disabled: false,
    href: "",
    loading: false,
    loadingColor: 'primary',
    variant: 'contained',
};

Button.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    loading: PropTypes.bool,
    loadingColor: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    variant: PropTypes.string,
};
