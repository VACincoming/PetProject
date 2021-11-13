import React from "react";
import StarIcon from "static/icons/StarIcon";
import CustomButton from "customComponents/CustomButton";
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import Logo from "static/img/logo.png";
import EN from "static/img/en.png";
import RU from "static/img/ru.png";
import UA from "static/img/ua.png";
import MAN from "static/img/man.png";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Dropdown from "components/Dropdown";
const Header = ({ user }) => {
    const history = useHistory();
    const { i18n, t } = useTranslation();
    const languages = [
        {
            name: "en",
            img: EN,
        },
        {
            name: "ru",
            img: RU,
        },
        {
            name: "ua",
            img: UA,
        },
    ];

    const handleClick = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleCreatePost = () => {
        if (user) {
            history.push("/create");
            return;
        }
        history.push("/login");
        return;
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
                        item
                    >
                        <img src={Logo} alt="Find Pet" />
                    </Grid>
                    <Grid
                        xs={9}
                        sm={7}
                        md={9}
                        justifyContent="flex-end"
                        className="header_menu-wrapper"
                        // container
                        // item
                    >
                        <Grid xs={2} item>
                            <Dropdown
                                activeItem={i18n.language}
                                handleClick={(lng) => handleClick(lng)}
                                items={languages}
                            />
                        </Grid>
                        <Grid xs={2} item>
                            <CustomButton
                                variant="contained"
                                classes="header_create-btn"
                                onClick={handleCreatePost}
                            >
                                {t("header:createPost")}
                            </CustomButton>
                        </Grid>
                        <Grid
                            xs={2}
                            item
                            justifyContent="flex-end"
                            className="header_menu-wrapper"
                        >
                            {user ? (
                                <Avatar alt="Cindy Baker">
                                    {/* {user?.email[0]}
                                {user?.email[1]} */}
                                </Avatar>
                            ) : (
                                <CustomButton
                                    variant="text"
                                    onClick={() => history.push("/login")}
                                >
                                    <img
                                        src={MAN}
                                        alt=""
                                        style={{ marginRight: "1rem" }}
                                    />
                                    <span style={{ color: "white" }}>
                                        {t("auth:login")}
                                    </span>
                                </CustomButton>
                            )}
                        </Grid>
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
