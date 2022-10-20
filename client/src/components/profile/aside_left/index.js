import React, { useContext } from 'react'

import ProfileBox from '../../common_common/ProfileBox';
// import SkillsBox from './SkillsBox';
import UserContext from '../../common/UserContext';
import PostJobBox from '../../common_common/PostJobBox';

function AsideLeft() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <ProfileBox name={profile.name} job={profile.job} avatar={profile.avatar} username={profile.username} btn="Log out" />
            {/* <SkillsBox skills={profile.skills} /> */}
            <PostJobBox />
        </aside>
    );
}

export default AsideLeft;