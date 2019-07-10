import React from 'react';

import { PacmanLoader } from 'react-spinners';

import '../../styles/common/loading.scss';

const Loading = ({ size = 50, color = 'white' }) => (
    <article className="loading">
        <PacmanLoader sizeUnit="px" size={size} color={color} loading />
    </article>
);

export default Loading;
