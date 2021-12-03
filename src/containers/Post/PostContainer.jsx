import React from "react";
import Post from "components/Post";
import { connect } from "react-redux";
import PostsActions from "redux/actions/PostsActions";
import "./index.scss";

const PostContainer = ({ posts, deletePost }) => {
    return (
        <>
            {posts && posts.length ? (
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
                            id={post.id}
                            type={post.type}
                            deletePost={() => deletePost(post.id)}
                        />
                    );
                })
            ) : (
                <div className="no-data">No posts</div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(PostsActions.deletePost(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
