import React from 'react'
import AdsBox from '../../common_common/AdsBox';
import JobAdsBox from '../../common_common/JobAdsBox';

function AsideLeft() {
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <AdsBox img="img/job1.png" title="Notifications" titleStyle="text-dark" desc="You’re all caught up! Check back later for new notifications" btn=" View settings " btnStyle="btn-outline-primary" />
            <JobAdsBox />
        </aside>
    );
}

export default AsideLeft;