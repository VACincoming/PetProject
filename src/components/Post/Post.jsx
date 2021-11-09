import React from "react";
import "./index.scss";

const Post = ({
    title = "Пропал кот",
    description = "Рыжий кот пропал",
    type='found',
    createdAt = "20/07/2021",
    contactEmail = "Vasil Pertovich",
    contactPhone = "+380931235422",
    photoUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
}) => {
    const date = createdAt?.split(" ")[0];
    let time = createdAt?.split(" ")[1];
    time = time?.replace(/-/g, ":");
    return (
        <div data-component="announ">
            <div className="announ-image">
                <img src={photoUrl} alt="pet" />
            </div>
            <div className="announ-content">
                <div className="announ-top">
                    <h3 className="announ-title">{title}</h3>
                    <h4 className="announ-type">{type}</h4>
                    <span className="announ-description">{description}</span>
                </div>
                <div className="announ-contacts">
                    <span>{contactEmail}</span>
                    <span>{contactPhone}</span>
                    <div className="announ-date">
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
