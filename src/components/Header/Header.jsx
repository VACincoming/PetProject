import React from "react";
import StarIcon from "static/icons/StarIcon";
import CustomButton from "customComponents/CustomButton";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import Logo from "static/img/logo.png";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

const Header = ({ user }) => {
    const history = useHistory();
    const { i18n } = useTranslation();
    const changeLanguage = (lang) => {
        console.log(i18n);
        i18n.changeLanguage(lang);
    };
    return (
        <div className="header">
            <div className="header_logo" onClick={() => history.push("/")}>
                <img src={Logo} alt="Find Pet" />
            </div>
            <div className="header_menu-wrapper">
                <CustomButton classes="header_favorites-btn">
                    <StarIcon height="30px" width="30px" />
                </CustomButton>
                <CustomButton text="en" onClick={() => changeLanguage("en")} />
                <CustomButton text="ru" onClick={() => changeLanguage("ru")} />
                {user && (
                    <CustomButton
                        onClick={() => history.push("/create")}
                        classes="header_add-btn"
                    >
                        ADD AN ADD
                    </CustomButton>
                )}
                {user ? (
                    <Avatar alt="Cindy Baker">
                        {user.email[0]}
                        {user.email[1]}
                    </Avatar>
                ) : (
                    <CustomButton text="Login" onClick={() => history.push("/login")}/>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Header);
