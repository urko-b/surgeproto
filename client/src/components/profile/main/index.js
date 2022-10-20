import React, { useContext } from 'react'
import TextBox from '../../common_common/TextBox';
import EducationBox from '../../common_common/EducationBox';
import ExperienceBox from '../../common_common/ExperienceBox';
import UserContext from '../../common/UserContext';

function Main(props) {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    console.log(profile);

    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <TextBox title="About You" text1={profile.about} />
            <ExperienceBox experience={profile.experience} />
            <EducationBox education={profile.education} />
        </main>
    );
}

export default Main;