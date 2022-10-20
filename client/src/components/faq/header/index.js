import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="bg-primary pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 text-center mx-auto my-4">
                        <div className="mb-4">
                            <h1 className="display-4 text-white mb-0">How can we <span className="font-weight-bold">help?</span></h1>
                        </div>
                        <form className="input-group input-group-lg input-group-borderless mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-0" id="askQuestions">
                                    <span className="feather-search"></span>
                                </span>
                            </div>
                            <input type="search" className="form-control border-0 shadow-none" placeholder="Ask a question" aria-label="Ask a question" aria-describedby="askQuestions" />
                        </form>
                        <p className="text-white">
                            Popular help topics:
                            <Link className="text-info ml-1" to="#">pricing,</Link>
                            <Link className="text-info ml-1" to="#">upgrade,</Link>
                            <Link className="text-info ml-1" to="#">hosting,</Link>
                            <Link className="text-info ml-1" to="#">membership</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Header;