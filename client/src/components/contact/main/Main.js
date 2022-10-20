import React from 'react'
import Iframe from 'react-iframe';

function Main() {
    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="p-4 border mr-4 rounded overflow-hidden"><Iframe width="100%" height="455" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=30.9090157&amp;q=punjab+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" /></div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-5">
                            <h4 className="font-weight-light mt-0">Tell us about <span className="font-weight-bold">yourself</span></h4>
                            <p className="text-muted">Whether you have questions or you would just like to say hello, contact us.
                            </p>
                        </div>
                        <form action="index.html">
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group mb-4">
                                        <label className="mb-1">YOUR NAME <small className="text-danger">*</small></label>
                                        <div className="position-relative icon-form-control">
                                            <i className="feather-user position-absolute"></i>
                                            <input placeholder="Gurdeep Osahan" type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group mb-4">
                                        <label className="mb-1">YOUR EMAIL ADDRESS <small className="text-danger">*</small></label>
                                        <div className="position-relative icon-form-control">
                                            <i className="feather-mail position-absolute"></i>
                                            <input placeholder="iamosahan@gmail.com" type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group mb-4">
                                        <label className="mb-1">SUBJECT <small className="text-danger">*</small></label>
                                        <div className="position-relative icon-form-control">
                                            <i className="feather-edit-2 position-absolute"></i>
                                            <input placeholder="UI/UX Design" type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group mb-4">
                                        <label className="mb-1">YOUR PHONE NUMBER <small className="text-danger">*</small></label>
                                        <div className="position-relative icon-form-control">
                                            <i className="feather-phone position-absolute"></i>
                                            <input placeholder="1-800-643-4500" type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label className="mb-1">HOW CAN WE HELP YOU? <small className="text-danger">*</small></label>
                                <div className="position-relative">
                                    <textarea className="form-control" rows="4" name="text" placeholder="Hi there, I would like to ..."></textarea>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-primary text-uppercase btn-lg" type="submit"> Submit </button>
                                <label className="m-0 pl-4 text-black-50">We'll get back to you in 1-2 business days.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;