import React from 'react'

import NavNonSerch from '../layout/NavNonserch';
import Main from './contents/Main';
import Header from './header';

function Blog() {
    return (
        <div>
            <NavNonSerch />
            <Header />
            <div className="py-5">
                <Main />
            </div>
        </div>
    );
}

export default Blog;