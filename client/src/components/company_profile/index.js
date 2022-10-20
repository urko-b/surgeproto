import React from 'react'

import Nav from '../layout/Nav';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import Main from './main';

function CompanyProfile() {
    return (
        <div>
            <Nav />
            <div className="profile-cover text-center">
                <img className="img-fluid" src="img/company-profile.jpg" alt="" />
            </div>
            <div className="bg-white shadow-sm border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex align-items-center py-3">
                                <div className="profile-left">
                                    <h5 className="font-weight-bold text-dark mb-1 mt-0">Google <span className="text-info"><i data-toggle="tooltip" data-placement="top" title="Verified" className="feather-check-circle"></i></span></h5>
                                    <p className="mb-0 text-muted"> Internet | Mountain View, CA | 14,128,005 followers</p>
                                </div>
                                <div className="profile-right ml-auto">
                                    <button type="button" className="btn btn-light mr-2"> <i className="feather-external-link"></i> Visit website </button>
                                    <button type="button" className="btn btn-primary"> <i className="feather-plus"></i> Follow </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-4 pt-3">
                <div className="container">
                    <div className="row">
                        <Main />
                        <AsideLeft />
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfile;