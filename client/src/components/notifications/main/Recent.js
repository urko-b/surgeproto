import React from 'react'

function Recent() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Recent</h6>
            </div>
            <div className="box-body p-0">
                <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/p6.png" alt="" />
                    </div>
                    <div className="font-weight-bold mr-3">
                        <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                        <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
                    </div>
                    <span className="ml-auto mb-auto">
                        <div className="btn-group">
                            <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-more-vertical"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
                                <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
                            </div>
                        </div>
                        <br />
                        <div className="text-right text-muted pt-1">3d</div>
                    </span>
                </div>
                <div className="p-3 d-flex align-items-center osahan-post-header">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/l2.png" alt="" />
                    </div>
                    <div className="font-weight-bold mr-3">
                        <div className="mb-2">We found a job at wrapbootstrap Ltd that you may be interested in Vivamus imperdiet venenatis est...
                        </div>
                        <button type="button" className="btn btn-outline-primary">View Jobs</button>
                    </div>
                    <span className="ml-auto mb-auto">
                        <div className="btn-group">
                            <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-more-vertical"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
                                <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
                            </div>
                        </div>
                        <br />
                        <div className="text-right text-muted pt-1">4d</div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Recent;