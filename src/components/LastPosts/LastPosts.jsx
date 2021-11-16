import React from "react";
import "./index.scss";
const LastPosts = ({ lastPosts }) => {
    return (
        <div data-component="last-posts">
            <h3>Нещодавно додані</h3>
            {lastPosts.map((post, index) => {
                const date = post.createdAt?.split(" ")[0];
                let time = post.createdAt?.split(" ")[1];
                time = time?.replace(/-/g, ":");
                return (
                    <div className="last-posts-item" key={post.id}>
                        <p>
                            {++index}) {post.title}{" "}
                        </p>
                        <div>
                            <p>{date}</p>
                            <p>{time}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LastPosts;
