import React,{Suspense, lazy} from 'react';
import AllPost from '../components/AllPost/AllPost';
import Navigation from '../components/Navigation/Navigation';

const PostPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllPost></AllPost>
        </div>
    );
};

export default PostPage;