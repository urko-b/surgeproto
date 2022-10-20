import React from 'react'

import Nav from '../layout/Nav';
import AllList from './contents/AllList';
import Main from './contents/Main';

function Terms() {
    return (
        <div>
            <Nav />

            <div className="bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <Main />
                        </div>
                        <div className="col-md-3">
                            <AllList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;
