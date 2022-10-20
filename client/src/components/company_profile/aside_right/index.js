import React from 'react'
import AdsBox from '../../common_common/AdsBox';

import PeopleBox from '../../common_common/PeopleBox';

function AsideRight() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <PeopleBox title="Similar pages" btnStyle="btn-light text-nowrap" btnIcon="feather-plus" btn=" Follow" />
            <PeopleBox title="People also viewed" btnStyle="btn-outline-primary" btnIcon="" btn="Connent" />
            <AdsBox img="img/ads1.png" title="Olink Premium" titleStyle="text-gold" desc="Grow &amp; nurture your network" btn=" ACTIVATE " btnStyle="btn-outline-gold" />
        </aside>
    );
}

export default AsideRight;