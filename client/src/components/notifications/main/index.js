import React from 'react'
import Earlier from './Earlier';
import Recent from './Recent';

function Main() {
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <Recent />
            <Earlier />
        </main>
    );
}

export default Main;