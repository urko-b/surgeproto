import React from 'react'

import NavNonSerch from '../layout/NavNonserch';
import Intro from './contents/Intro';
import Header from './header';

function Privacy() {
    return (
        <div>
            <NavNonSerch />

            <Header />
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <Intro />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;