import React from 'react'

function BlogSearchCard() {
    return (
        <div className="sidebar-card box shadow-sm rounded bg-white mb-3 border-0">

            <div className="card-body">
                <h5 className="card-title mb-4">Blog Search</h5>

                <div className="input-group">
                    <input className="form-control" placeholder="Type and hit enter" aria-label="Recipient's username" aria-describedby="basic-addon2" type="text" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><i className="feather-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSearchCard;