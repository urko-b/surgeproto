import React, { useContext } from 'react'

import ProfileBox from '../../common_common/ProfileBox';
import ViewBox from './ViewBox';
import AdsBox from '../../common_common/AdsBox';
import UserContext from '../../common/UserContext';
import PostJobBox from '../../common_common/PostJobBox';

function AsideLeft() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <ProfileBox name={profile.name} job={profile.job} avatar={profile.avatar} username={profile.username} btn="View my profile" />
            <ViewBox />
            {/* <AdsBox img="img/job1.png" title="Osahan Solutions" titleStyle="text-dark" desc="Looking for talent?" btn="POST A JOB" btnStyle="btn-outline-primary" /> */}
        </aside>
    );
}

export default AsideLeft;