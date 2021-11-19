import React, { useEffect, useState } from "react";
import Post from "components/Post";
import { getPostsService } from "services/posts.service";
import { connect } from "react-redux";
import PostsActions from "redux/actions/PostsActions";

const PostContainer = ({ posts, getPosts }) => {
    // const [posts, setPosts] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPosts();
    }, []);
    console.log(posts);
    return (
        <>
            {posts &&
                posts?.map((post) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(PostsActions.getPosts()),
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
