import React from "react";
import StarIcon from "static/icons/StarIcon";
import CustomButton from "customComponents/CustomButton";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import Logo from "static/img/logo.png";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Dropdown from "components/Dropdown";
const Header = ({ user }) => {
    const history = useHistory();
    const { i18n, t } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className="header">
            <Container
                maxWidth="lg"
                component="header"
                className="header_container"
            >
                <Grid
                    xs={12}
                    className="header_wrapper"
                    alignContent="center"
                    justifyContent="space-between"
                >
                    <Grid
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        justifyContent="flex-start"
                        className="header_logo"
                        onClick={() => history.push("/")}
                    >
                        <img src={Logo} alt="Find Pet" />
                    </Grid>
                    <Grid
                        xs={9}
                        sm={7}
                        md={9}
                        justifyContent="flex-end"
                        className="header_menu-wrapper"
                    >
                        <CustomButton classes="header_create-btn">
                            {/* <StarIcon height="30px" width="30px" /> */}
                            {t("header:createPost")}
                        </CustomButton>
                        {/* <CustomButton
                            text="en"
                            onClick={() => changeLanguage("en")}
                        />
                        <CustomButton
                            text="ru"
                            onClick={() => changeLanguage("ru")}
                        /> */}
                        <Dropdown />
                        {user && (
                            <CustomButton
                                onClick={() => history.push("/create")}
                                classes="header_add-btn"
                            >
                                {t("create:title")}
                            </CustomButton>
                        )}
                        {user ? (
                            <Avatar alt="Cindy Baker">
                                {/* {user?.email[0]}
                                {user?.email[1]} */}
                            </Avatar>
                        ) : (
                            <CustomButton
                                text={t("auth:login")}
                                onClick={() => history.push("/login")}
                            />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Header);
