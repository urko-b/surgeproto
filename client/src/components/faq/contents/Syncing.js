import React from 'react'

function Syncing() {
    return (
        <div id="syncing">
            <div className="mb-3 mt-4">
                <h4 className="font-weight-semi-bold">Syncing</h4>
            </div>
            <div id="syncingAccordion">
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="syncingHeadingOne">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#syncingCollapseOne" aria-expanded="false" aria-controls="syncingCollapseOne">
                                How does syncing work?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="syncingCollapseOne" className="collapse show" aria-labelledby="syncingHeadingOne" data-parent="#syncingAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="syncingHeadingTwo">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#syncingCollapseTwo" aria-expanded="false" aria-controls="syncingCollapseTwo">
                                How do I upload files from my phone or tablet?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="syncingCollapseTwo" className="collapse" aria-labelledby="syncingHeadingTwo" data-parent="#syncingAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="syncingHeadingThree">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#syncingCollapseThree" aria-expanded="false" aria-controls="syncingCollapseThree">
                                How do I link to a file or folder?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="syncingCollapseThree" className="collapse" aria-labelledby="syncingHeadingThree" data-parent="#syncingAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Syncing;