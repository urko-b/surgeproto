import React from 'react'

import { Link } from 'react-router-dom'

function ArchivesCard() {
    return (
        <div className="sidebar-card box shadow-sm rounded bg-white mb-3 border-0">

            <div className="card-body">
                <h5 className="card-title mb-3">Archives</h5>

                <ul className="sidebar-card-list">
                    <li><Link to="#"><i className="feather-arrow-right-circle"></i> December, 2017</Link></li>
                    <li><Link to="#"><i className="feather-arrow-right-circle"></i> November, 2017</Link></li>
                    <li><Link to="#"><i className="feather-arrow-right-circle"></i> October, 2017</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default ArchivesCard;