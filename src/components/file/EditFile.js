import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { Button } from '../common';
import CATEGORY_NAMES from '../../utils/constants/categoryNames';

import '../../styles/common/formIntegrations.scss';

const EditFile = (props) => {
    const {
        newFile,
        closeModal,
        formValues = {},
        createFile,
        editFile,
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
    };

    return (
        <article>
            <h2>Upload your Business Template</h2>
            <form id="editFile" onSubmit={submitFile}>
                <div className="inputWithLabel">
                    <label htmlFor="fileTitle">
                        Title
                        <input
                            id="fileTitle"
                            type="text"
                            name="fileTitle"
                            value={fileTitle}
                            minLength={1}
                            onChange={e => updateFileTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
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
                <FormControl className="materialUiElement">
                    <InputLabel htmlFor="fileCategoryName">File Category Type</InputLabel>
                    <NativeSelect
                        value={fileCategoryName}
                        onChange={e => updateFileCategoryName(e.target.value)}
                        input={<Input name="fileCategoryName" id="fileCategoryName" required />}
                    >
                        <option value="" />
                        {CATEGORY_NAMES
                            && Object.keys(CATEGORY_NAMES).map(key => (
                                <option key={key} value={key}>
                                    {CATEGORY_NAMES[key]}
                                </option>
                            ))}
                    </NativeSelect>
                </FormControl>
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
                <section className="closeModal">
                    <Button buttonClass="cancel" text="Cancel" onClick={closeModal} />
                    <Button buttonClass="action" text="Save File" buttonType="submit" />
                </section>
            </form>
        </article>
    );
};

export default EditFile;
