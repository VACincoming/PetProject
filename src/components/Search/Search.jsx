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

const Search = ({ searchPosts, getPosts }) => {
    const { t } = useTranslation();
    const onSubmit = (search) => {
        if (search?.search) {
            searchPosts(search.search);
            return;
        }
        getPosts();
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
                        placeholder={t("create:searchInput")}
                    />
                    <CustomButton
                        variant="contained"
                        classes="search-btn header_create-btn"
                        type="submit"
                    >
                        {t("create:search")}
                        <img src={SearchIcon} className="search-icon" alt="O" />
                    </CustomButton>
                </Form>
            )}
        </CustomForm>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(PostsActions.getPosts()),
        searchPosts: (search) => dispatch(PostsActions.searchPosts(search)),
    };
};

export default connect(null, mapDispatchToProps)(Search);
