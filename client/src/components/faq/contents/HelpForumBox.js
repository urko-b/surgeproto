import React from 'react'

import { Link } from 'react-router-dom'

function HelpForumBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
                <i className="feather-message-circle display-4"></i>
                <div className="ml-4">
                    <h5 className="font-weight-normal text-dark mb-3 mt-0">Help Forum</h5>
                    <p className="mb-0 text-muted">Find the answer to any question, from the basics all the way to advanced tips and tricks!
                        ...
                    </p>
                </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
                <Link className="font-weight-bold d-block" to="#"> Olink Help Forum. </Link>
                <i className="feather-arrow-right-circle ml-auto text-primary"></i>
            </div>
        </div>
    );
}

export default HelpForumBox;