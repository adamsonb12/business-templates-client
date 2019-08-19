import React, { useState } from 'react';

import { Dropdown, Form, HugoButton, TextInput } from '../common';
import CATEGORY_NAMES from '../../utils/constants/categoryNames';

import '../../styles/common/forms.scss';

const EditFile = (props) => {
    const {
        createFile,
        closeModal,
        editFile,
        formValues = {},
        newFile,
        onFinish,
        user_id,
        submitEdit,
    } = props;
    const { startingTitle, startingDescription, startingCategoryName, startingFile } = formValues;
    // Fields
    const [fileTitle, updateFileTitle] = useState(startingTitle || '');
    const [fileDescription, updateFileDescription] = useState(startingDescription || '');
    const [fileCategoryName, updateFileCategoryName] = useState(startingCategoryName || '');
    const [file, updateFile] = useState(startingFile || '');

    // Validations => confirm the category name is a valid value
    const [validCategoryName, updateValidCategoryName] = useState(true);

    const validCateogry = () => CATEGORY_NAMES.includes(fileCategoryName);

    const submitFile = (e) => {
        e.preventDefault();
        if (validCateogry) {
            // call action to upload, if no problems, show success message
        }
        console.log('upload file', e);
        console.log('fileTitle', fileTitle);
        console.log('fileDescription', fileDescription);
        console.log('fileCategoryName', fileCategoryName);
        console.log('file', file);

        // Get all data, and confirm it's valid, including make sure we have a real file
        // if new file do create
        // else edit logic
        onFinish();
    };

    return (
        <Form formId="edit-file" onSubmit={submitFile}>
            <h2>Upload your Business Template</h2>
            <TextInput
                inputId="edit-file-title"
                label="Title"
                minLength={1}
                onChange={e => updateFileTitle(e.target.value)}
                required
                value={fileTitle}
            />
            {/* Todo => text area in common */}
            <div className="inputWithLabel">
                <label htmlFor="fileDescription">
                    Desription
                    <textarea
                        id="fileDescription"
                        type="text"
                        name="fileDescription"
                        value={fileDescription}
                        minLength={1}
                        onChange={e => updateFileDescription(e.target.value)}
                        rows={8}
                        required
                    />
                </label>
            </div>
            <Dropdown
                inputId="file-category-name"
                label="File Category Type"
                onChange={e => updateFileCategoryName(e.target.value)}
                options={CATEGORY_NAMES}
                value={fileCategoryName}
            />
            {/* TODO commonize file input */}
            <div className="inputWithLabel">
                <label htmlFor="file">
                    File
                    <input
                        type="file"
                        name="file"
                        value={file}
                        onChange={e => updateFile(e.target.value)}
                        required
                    />
                </label>
            </div>
            <section className="formFooter modalFormFooter">
                <HugoButton text="Cancel" onClick={onFinish} color="secondary" />
                <HugoButton text="Submit" type="submit" />
            </section>
        </Form>
    );
};

export default EditFile;
