import React from 'react'

function Privacy() {
    return (
        <div id="privacy">
            <div className="mb-3 mt-4">
                <h4 className="font-weight-semi-bold">Privacy</h4>
            </div>
            <div id="privacyAccordion">
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="privacyHeadingOne">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#privacyCollapseOne" aria-expanded="false" aria-controls="privacyCollapseOne">
                                Can I specify my own private key?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="privacyCollapseOne" className="collapse show" aria-labelledby="privacyHeadingOne" data-parent="#privacyAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="privacyHeadingTwo">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseTwo" aria-expanded="false" aria-controls="privacyCollapseTwo">
                                My files are missing! How do I get them back?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="privacyCollapseTwo" className="collapse" aria-labelledby="privacyHeadingTwo" data-parent="#privacyAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="privacyHeadingThree">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseThree" aria-expanded="false" aria-controls="privacyCollapseThree">
                                How can I access my privacy data?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="privacyCollapseThree" className="collapse" aria-labelledby="privacyHeadingThree" data-parent="#privacyAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="privacyHeadingFour">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseFour" aria-expanded="false" aria-controls="privacyCollapseFour">
                                How can I control if other search engines can link to my profile?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="privacyCollapseFour" className="collapse" aria-labelledby="privacyHeadingFour" data-parent="#privacyAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;