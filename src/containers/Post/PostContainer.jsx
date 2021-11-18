import React, { useEffect, useState } from "react";
import Post from "components/Post";
// import { getPosts } from "api/post.api";
import { getPostsService } from "services/posts.service";
import { connect } from "react-redux";

const PostContainer = ({ posts }) => {
    // const [posts, setPosts] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        await getPostsService();
        console.log(getPostsService);
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const { journalService } = ownProps;
    return bindActionCreators(
        {
            fetchRegistry: fetchRegistry(journalService),
        },
        dispatch
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
