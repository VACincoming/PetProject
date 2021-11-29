import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

const Post = ({
    title = "Пропал кот",
    description = "Рыжий кот пропал",
    type = "found",
    createdAt = "20/07/2021",
    id = "",
    contactEmail = "Vasil Pertovich",
    contactPhone = "+380931235422",
    photoUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/1086B/production/_115619676_dog2.jpg",
}) => {
    const date = createdAt?.split(" ")[0];
    let time = createdAt?.split(" ")[1];
    time = time?.replace(/-/g, ":");
    const [typeAnn, setTypeAnn] = useState(type);
    const history = useHistory();
    useEffect(() => {
        if (type === "found") {
            setTypeAnn("Знайдено");
            return;
        }
        setTypeAnn("Втрачено");
    }, []);
    return (
        <div
            data-component="announ"
            onClick={() => history.push(`/view-post/${id}`)}
        >
            <div className="announ-image">
                <img src={photoUrl} alt="pet" />
            </div>
            <div className="announ-content">
                <div className="announ-top">
                    <h3 className="announ-title">{title}</h3>
                    <span className="announ-description">{description}</span>
                </div>
                <div className="announ-contacts">
                    <h4 style={{ marginBottom: "0.5rem" }}>Contacts</h4>
                    <p>{contactEmail}</p>
                    <p>{contactPhone}</p>
                </div>
                <div className="announ-bottom-info">
                    <h4 className="announ-type">{typeAnn}</h4>
                    <div className="announ-date">
                        <div>{date}</div>
                        {/* <div>{time}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
