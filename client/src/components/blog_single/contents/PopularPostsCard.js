import React from 'react'

import { Link } from 'react-router-dom'

function PopularPostsCard() {
    return (
        <div className="sidebar-card box shadow-sm rounded bg-white mb-3 border-0">

            <div className="card-body">
                <h5 className="card-title mb-4">Popular Posts</h5>


                <Link to="#"><h6>Possimus aut mollitia eum ipsum</h6></Link>
                <p className="mb-0"><i className="feather-calendar"></i> April 05, 2020</p>
                <hr />
                <Link to="#"><h6>Nulla malesuada mauris non nulla imperdiet ullamcorper</h6></Link>
                <p className="mb-0"><i className="feather-calendar"></i> June 20, 2020</p>
                <hr />
                <Link to="#"><h6 className="text-dark">Focus on creating and growing your projects and websites</h6></Link>
                <p className="mb-0"><i className="feather-calendar"></i> June 29, 2020</p>
                <hr />
                <Link to="#"><h6>Vestibulum lobortis urna eu mauris viverra porttitor. Cras consequat </h6></Link>
                <p className="mb-0"><i className="feather-calendar"></i> October 10, 2020</p>
                <hr />
                <Link to="#"><h6>Sed lacinia varius nisi et euismod.</h6></Link>
                <p className="mb-0"><i className="feather-calendar"></i> April 05, 2020</p>
            </div>
        </div>
    );
}

export default PopularPostsCard;