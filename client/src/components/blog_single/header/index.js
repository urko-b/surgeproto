import React from 'react'

function Header() {
    return (
        <div className="py-5 bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <h1 className="text-white font-weight-light"><span className="font-weight-bold">Blog
                        </span> Single</h1>
                        <p className="mb-2 text-white-50">Last modified: March 27, 202 (view archived versions)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;