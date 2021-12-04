import React from "react";
import Post from "components/Post";
import { connect } from "react-redux";
import PostsActions from "redux/actions/PostsActions";
import "./index.scss";

const PostContainer = ({ posts, deletePost, user = {} }) => {
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
                            role={user?.role}
                            type={post.type}
                            status={post.status}
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
        user: state.user.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(PostsActions.deletePost(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
