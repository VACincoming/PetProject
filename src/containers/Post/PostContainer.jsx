import React, { useEffect } from "react";
import Post from "components/Post";
import { connect } from "react-redux";

const PostContainer = ({ posts }) => {
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
                    })
                }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

export default connect(mapStateToProps, null)(PostContainer);
