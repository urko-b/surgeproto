import React from 'react'

import NavBlue from '../layout/NavBlue';
import Basics from './contents/Basics';
import Header from './header';
import HelpForumBox from './contents/HelpForumBox';
import SafetyCenterBox from './contents/SafetyCenterBox';
import Syncing from './contents/Syncing';
import Account from './contents/Account';
import Privacy from './contents/Privacy';

function Faq() {
    return (
        <div>
            <NavBlue />

            <Header />
            <div className="py-4">
                <div className="container mx-auto col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <HelpForumBox />
                        </div>
                        <div className="col-md-6">
                            <SafetyCenterBox />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Basics />
                            <Syncing />
                            <Account />
                            <Privacy />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;