import React from 'react'

import Nav from '../layout/Nav';
import FooterLight from '../layout/FooterLight';
import Header from './header';
import Main from './main/Main';


function Contact() {
    return (
        <div>
            <Nav />
            <Header />
            <Main />
            <FooterLight />
        </div>
    );
}

export default Contact;