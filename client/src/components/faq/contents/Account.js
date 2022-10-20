import React from 'react'

function Account() {
    return (
        <div id="account">
            <div className="mb-3 mt-4">
                <h4 className="font-weight-semi-bold">Account</h4>
            </div>
            <div id="accountAccordion">
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="accountHeadingOne">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#accountCollapseOne" aria-expanded="false" aria-controls="accountCollapseOne">
                                How do I change my password?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="accountCollapseOne" className="collapse show" aria-labelledby="accountHeadingOne" data-parent="#accountAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="accountHeadingTwo">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseTwo" aria-expanded="false" aria-controls="accountCollapseTwo">
                                How do I delete my account?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="accountCollapseTwo" className="collapse" aria-labelledby="accountHeadingTwo" data-parent="#accountAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="accountHeadingThree">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseThree" aria-expanded="false" aria-controls="accountCollapseThree">
                                How do I change my account settings?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="accountCollapseThree" className="collapse" aria-labelledby="accountHeadingThree" data-parent="#accountAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="accountHeadingFour">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseFour" aria-expanded="false" aria-controls="accountCollapseFour">
                                I forgot my password. How do I reset it?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="accountCollapseFour" className="collapse" aria-labelledby="accountHeadingFour" data-parent="#accountAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;