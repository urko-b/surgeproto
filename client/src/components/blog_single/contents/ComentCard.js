import React from 'react'

function CommentCard() {
    return (
        <div className="padding-card box shadow-sm rounded bg-white mb-3 border-0">
            <div className="card-body">
                <h5 className="card-title mb-4">Leave a Comment</h5>
                <form name="sentMessage">
                    <div className="row">
                        <div className="control-group form-group col-lg-6 col-md-6">
                            <div className="controls">
                                <label>Your Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" required="" />
                            </div>
                        </div>
                        <div className="control-group form-group col-lg-6 col-md-6">
                            <div className="controls">
                                <label>Your Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Review <span className="text-danger">*</span></label>
                            <textarea rows="10" cols="100" className="form-control"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default CommentCard;