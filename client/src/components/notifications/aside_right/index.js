import React from 'react'

import PeopleBox from '../../common_common/PeopleBox';
import SimilarJobsBox from '../../common_common/SimilarJobsBox';

function AsideRight() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <button type="button" className="btn btn-lg btn-block btn-danger mb-3"> <i className="feather-bell"></i> Set alert for jobs </button>
            <SimilarJobsBox />
            <PeopleBox title="Who viewed your profile" btn="Connent" btnStyle="btn-outline-primary" />
        </aside>
    );
}

export default AsideRight;