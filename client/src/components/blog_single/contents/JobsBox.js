import React from 'react'

function JobsCard() {
    return (
        <div className="sidebar-card box shadow-sm rounded bg-white mb-3 border-0">

            <div className="card-body">
                <h5 className="card-title mb-4">Jobs</h5>

                <div id="featured-properties" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#featured-properties" data-slide-to="0" className=""></li>
                        <li data-target="#featured-properties" data-slide-to="1" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <div className="border rounded bg-white job-item">
                                <div className="d-flex align-items-center p-3 job-item-header">
                                    <div className="overflow-hidden mr-2">
                                        <h6 className="font-weight-bold text-dark mb-0 text-truncate">Product Director</h6>
                                        <div className="text-truncate text-primary">Spotify Inc.</div>
                                        <div className="small text-gray-500"><i className="feather-map-pin"></i> India, Punjab</div>
                                    </div>
                                    <img className="img-fluid ml-auto" src="img/l3.png" alt="" />
                                </div>
                                <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                                    <div className="overlap-rounded-circle">
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p9.png" alt="" data-original-title="Sophia Lee" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p10.png" alt="" data-original-title="John Doe" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p11.png" alt="" data-original-title="Julia Cox" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p12.png" alt="" data-original-title="Robert Cook" />
                                    </div>
                                    <span className="font-weight-bold text-muted">18 connections</span>
                                </div>
                                <div className="p-3 job-item-footer">
                                    <small className="text-gray-500"><i className="feather-clock"></i> Posted 3 Days ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="border rounded bg-white job-item">
                                <div className="d-flex align-items-center p-3 job-item-header">
                                    <div className="overflow-hidden mr-2">
                                        <h6 className="font-weight-bold text-dark mb-0 text-truncate">Product Director</h6>
                                        <div className="text-truncate text-primary">Spotify Inc.</div>
                                        <div className="small text-gray-500"><i className="feather-map-pin"></i> India, Punjab</div>
                                    </div>
                                    <img className="img-fluid ml-auto" src="img/l3.png" alt="" />
                                </div>
                                <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                                    <div className="overlap-rounded-circle">
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p9.png" alt="" data-original-title="Sophia Lee" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p10.png" alt="" data-original-title="John Doe" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p11.png" alt="" data-original-title="Julia Cox" />
                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p12.png" alt="" data-original-title="Robert Cook" />
                                    </div>
                                    <span className="font-weight-bold text-muted">18 connections</span>
                                </div>
                                <div className="p-3 job-item-footer">
                                    <small className="text-gray-500"><i className="feather-clock"></i> Posted 3 Days ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobsCard;