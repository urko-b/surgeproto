import React from 'react'

import NavNonSerch from '../layout/NavNonserch';
import ArchivesCard from './contents/ArchivesCard';
import BlogCard from './contents/BlogCard';
import BlogSearchCard from './contents/BlogSearchCard';
import CommentCard from './contents/ComentCard';
import JobsCard from './contents/JobsBox';
import PopularPostsCard from './contents/PopularPostsCard';
import ReviewsCard from './contents/ReviewsCard';
import Header from './header';

function BlogSingle() {
    return (
        <div>
            <NavNonSerch />
            <Header />
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <BlogCard />
                            <ReviewsCard />
                            <CommentCard />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <BlogSearchCard />
                            <PopularPostsCard />
                            <ArchivesCard />
                            <JobsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSingle;