import React from 'react'

import NavNonSerch from '../layout/NavNonserch';
import FooterLight from '../layout/FooterLight';
import Header from './header';
import Main from './main';

function Pricing() {
    return (
        <div>
            <NavNonSerch />
            <Header />
            <Main />
            <FooterLight />
        </div>
    );
}

export default Pricing;