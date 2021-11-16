import React from "react";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import { Form } from "formik";
import { useTranslation } from "react-i18next";
import CustomButton from "customComponents/CustomButton";
import SearchIcon from "static/img/searchIcon.png";
import "./index.scss";

const Search = () => {
    const { t } = useTranslation();
    const onSubmit = async (values) => {
        console.log(values);
    };
    return (
        <CustomForm
            initialValues={{
                search: "",
            }}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="search-form">
                    <CustomField
                        name="search"
                        id="search"
                        required={true}
                        className={"search-input"}
                        // label={t("search")}
                        size="small"
                        value={values.search}
                        placeholder={t("Що ви шукаєте?")}
                    />
                    <CustomButton
                        variant="contained"
                        classes="search-btn header_create-btn"
                        type="submit"
                    >
                        Шукати
                        <img src={SearchIcon} className="search-icon" alt="O" />
                    </CustomButton>
                </Form>
            )}
        </CustomForm>
    );
};

export default Search;
