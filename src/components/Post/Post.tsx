import React from "react";
import "./index.scss";

const Post = ({
    title = "Пропал кот",
    description = "Рыжий кот пропал",
    date = "20/07/2021",
    contactEmail = "Vasil Pertovich",
    contactPhone = "+380931235422",
    photoUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
}: any) => {
    return (
        <div data-component="announ">
            <div className="announ-image">
                <img src={photoUrl} alt="pet" />
            </div>
            <div className="announ-content">
                <div className="announ-top">
                    <h3 className="announ-title">{title}</h3>
                    <span className="announ-description">{description}</span>
                </div>
                <div className="announ-contacts">
                    <span>{contactEmail}</span>
                    <span>{contactPhone}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
