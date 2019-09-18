import React from 'react';

import MainHeader from './headers/MainHeader';
import '../styles/main.scss';

const action = event => dispatch => {
    dispatch(event);
}

const Main = () => (
    <main>
        <MainHeader />
        <section>Sorting</section>
        <article>files listed here</article>
    </main>
);

export default Main;
