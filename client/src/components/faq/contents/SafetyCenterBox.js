import React from 'react'

import { Link } from 'react-router-dom'

function SafetyCenterBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
                <i className="feather-lock display-4"></i>
                <div className="ml-4">
                    <h5 className="font-weight-normal text-dark mb-3 mt-0">Safety Center
                    </h5>
                    <p className="mb-0 text-muted">Want to learn more about setting up and managing your team? Look no further!
                        ...
                    </p>
                </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
                <Link className="font-weight-bold d-block" to="#"> Olink Safety Center. </Link>
                <i className="feather-arrow-right-circle ml-auto text-primary"></i>
            </div>
        </div>
    );
}

export default SafetyCenterBox;