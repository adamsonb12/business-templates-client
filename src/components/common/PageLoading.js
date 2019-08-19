import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

// TODO => material ui container around loading
const Loading = ({ size = 50, color = 'white' }) => (
    <article>
        <CircularProgress color={color} />
    </article>
);

Loading.defaultProps = { color: 'primary' };

Loading.propTypes = { color: PropTypes.string };

export default Loading;
