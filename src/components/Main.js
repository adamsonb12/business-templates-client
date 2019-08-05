import React, { useState } from 'react';

import { Button } from './common';
import EditFile from './file/EditFile';

import '../styles/main.scss';

const Main = () => {
    const [modalOpen, updateModalStatus] = useState(false);
    return (
        <main>
            <section className="mainHeader">
                <h1>Amazing Business Templates</h1>
                <h2>Learn from the makers behind hundreds of profitable businesses.</h2>
                <Button
                    buttonClass="callToAction"
                    text="Add Your Template"
                    onClick={() => updateModalStatus(true)}
                />
            </section>
            <section>Sorting</section>
            <article>files listed here</article>
        </main>
    );
};

export default Main;

                // <Modal isOpen={modalOpen}>
                //     {/* TODO => if logged in, show create file modal, else show the signup/login modal */}
                //     <EditFile closeModal={() => updateModalStatus(false)} />
                // </Modal>