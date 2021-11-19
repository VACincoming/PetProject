import React from "react";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import { Form } from "formik";
import { useTranslation } from "react-i18next";
import CustomButton from "customComponents/CustomButton";
import SearchIcon from "static/img/searchIcon.png";
import "./index.scss";
import PostsActions from "redux/actions/PostsActions";
import { connect } from "react-redux";

const Search = ({ searchPosts }) => {
    const { t } = useTranslation();
    const onSubmit = (search) => {
        console.log("13", search);
        searchPosts(search.search);
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
                        // required={true}
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

const mapDispatchToProps = (dispatch) => {
    return {
        searchPosts: (search) => dispatch(PostsActions.searchPosts(search)),
    };
};

export default connect(null, mapDispatchToProps)(Search);
