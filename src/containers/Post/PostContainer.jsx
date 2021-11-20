import React, { useEffect } from "react";
import Post from "components/Post";
import { connect } from "react-redux";
import PostsActions from "redux/actions/PostsActions";
import Loader from "components/Loader";

const PostContainer = ({ posts, getPosts, loading }) => {
    // const [posts, setPosts] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPosts();
    }, []);
    console.log(posts);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
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
                })
            )}
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
        loading: state.posts.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
