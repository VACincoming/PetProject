import React from "react";
import "./styles.scss";

const petLink =
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg";

const Announ = ({
    title = "Пропал кот",
    description = "Рыжий кот пропал",
    date = "20/07/2021",
    contacts = "Vasil Pertovich",
}: any) => {
    return (
        <div data-component="announ">
            <div className="announ-image">
                <img src={petLink} alt="pet" />
            </div>
            <div className="announ-content">
                <div className="announ-top">
                    <h3 className="announ-title">{title}</h3>
                    <span className="announ-description">{description}</span>
                </div>
                <div className="announ-contacts">
                    <span>{contacts}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default Announ;
