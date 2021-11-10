import React, { useEffect, useState } from "react";
import Post from "components/Post";
import { getPosts } from "api/post.api";

const PostContainer = () => {
    const [posts, setPosts] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await getPosts();
        setPosts(res.data);
    }, []);
    return (
        <>
            {posts?.map((post) => {
                return (
                    <Post
                        title={post.title}
                        description={post.description}
                        createdAt={post.createdAt}
                        contactEmail={post.contactEmail}
                        contactPhone={post.contactPhone}
                        photoUrl={post.photos[0]}
                        key={post.id}
                        type={post.type}
                    />
                );
            })}
        </>
    );
};

export default PostContainer;
