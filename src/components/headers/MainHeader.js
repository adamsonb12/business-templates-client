import React, { Fragment, useState } from 'react';

import EditFile from '../file/EditFile';
import { StandardDialogue, HugoButton } from '../common';

const MainHeader = () => {
    const [modalOpen, updateModalStatus] = useState(false);
    return (
        <Fragment>
            <section className="mainHeader">
                <h1>Amazing Business Templates</h1>
                <h2>Learn from the makers behind hundreds of profitable businesses.</h2>
                <HugoButton text="Add Your Template" onClick={() => updateModalStatus(true)} />
            </section>
            <StandardDialogue
                open={modalOpen}
                closeModal={() => updateModalStatus(false)}
                customFooter
            >
                {/* TODO => iflogged in, show create file modal, else show the signup/login modal */}
                <EditFile onFinish={() => updateModalStatus(false)} />
            </StandardDialogue>
        </Fragment>
    );
};

export default MainHeader;
