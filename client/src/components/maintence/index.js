import React from 'react'

import NavOnlyHome from '../layout/NavOnlyHome';
import Footer from '../layout/Footer';
import Main from './main';

function Maintence() {
    return (
        <div>
            <NavOnlyHome />

            <div className="vh-100 bg-white">
                <div className="container">
                    <div className="row align-items-center vh-100">
                        <Main />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Maintence;