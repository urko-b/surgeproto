import React from 'react'
import AdsBox from '../../common_common/AdsBox';
import OverviewAdsBox from '../../common_common/OverviewAdsBox';

function AsideLeft() {
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <OverviewAdsBox />
            <AdsBox img="img/job1.png" title="Osahan Solutions" desc="Looking for talent?" btnStyle=" btn-outline-primary" btn=" POST A JOB" />
        </aside>
    );
}

export default AsideLeft;