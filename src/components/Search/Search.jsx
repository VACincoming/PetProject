import React from "react";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import { Form } from "formik";
import { useTranslation } from "react-i18next";
import CustomButton from "customComponents/CustomButton";

import "./index.scss";

const Search = () => {
    const { t } = useTranslation();
    const onSubmit = async (values) => {
        console.log(values);
    };
    return (
        <CustomForm
            initialValues={{
                search:''
            }}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="search-input">
                    <CustomField
                        name="search"
                        id="search"
                        required={true}
                        // label={t("search")}
                        value={values.search}
                    />
                    <CustomButton type="submit">
                        Search
                    </CustomButton>
                </Form>
            )}
        </CustomForm>
    );
};

export default Search;
