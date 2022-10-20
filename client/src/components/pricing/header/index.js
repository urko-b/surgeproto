import React from 'react'

function Header() {
    return (
        <div className="py-5 bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center py-5">
                        <h1 className="text-white font-weight-light mt-0">Find the <span className="font-weight-bold">right plan</span> for your site</h1>
                        <p className="mb-4 text-white-50">Last modified: March 27, 202 (view archived versions)
                        </p>
                        <button type="button" className="btn btn-lg btn-outline-light">Monthly</button>
                        <button type="button" className="btn btn-lg btn-outline-light">Yearly <span className="badge badge-pill badge-warning">50%</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;