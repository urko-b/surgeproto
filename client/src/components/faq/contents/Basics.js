import React from 'react'

function Basics() {
    return (
        <div id="basics">
            <div className="mb-3 mt-0">
                <h4 className="font-weight-semi-bold">Basics</h4>
            </div>
            <div id="basicsAccordion">
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="basicsHeadingOne">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                                Do you have any built-in caching?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="basicsCollapseOne" className="collapse" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion" style={{}}>
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="basicsHeadingTwo">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                                Can I add/upgrade my plan at any time?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="basicsCollapseTwo" className="collapse" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="basicsHeadingThree">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                                What access comes with my hosting plan?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="basicsCollapseThree" className="collapse" aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="box shadow-sm border rounded bg-white mb-2">
                    <div id="basicsHeadingFour">
                        <h5 className="mb-0">
                            <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                                How do I change my password?
                                <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="basicsCollapseFour" className="collapse" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion">
                        <div className="card-body border-top p-3 text-muted">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basics;