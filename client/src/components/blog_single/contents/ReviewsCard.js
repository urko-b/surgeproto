import React from 'react'

function ReviewsCard() {
    return (
        <div className="padding-card reviews-card box shadow-sm rounded bg-white mb-3 border-0">

            <div className="card-body">
                <h5 className="card-title mb-4">3 Reviews</h5>
                <div className="media mb-4">
                    <img className="d-flex mr-3 rounded" src="img/user/1.jpg" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">Stave Martin <small>Feb 12, 2020</small>
                            <span className="star-rating float-right">
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i><small className="text-success">5/2</small>
                            </span></h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
                <div className="media">
                    <img className="d-flex mr-3 rounded" src="img/user/2.jpg" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">Mark Smith <small>Feb 09, 2020</small> <span className="star-rating float-right">
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i>
                            <i className="feather-star text-warning"></i><small className="text-success">5/1</small>
                        </span></h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <div className="media mt-4">
                            <img className="d-flex mr-3 rounded" src="img/user/3.jpg" alt="" />
                            <div className="media-body">
                                <h5 className="mt-0">Ryan Printz <small>Nov 13, 2020</small> <span className="star-rating float-right">
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i><small className="text-success">5/5</small>
                                </span></h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="media mt-4">
                    <img className="d-flex mr-3 rounded" src="img/user/5.jpg" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">Stave Mark <small>Feb 12, 2020</small>
                            <span className="star-rating float-right">
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i><small className="text-success">5/2</small>
                            </span></h5>
                        <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ReviewsCard;