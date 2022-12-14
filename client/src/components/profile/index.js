import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Nav from '../layout/Nav';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import Main from './main';
import { API_URL } from '../../config/api';

function Profile() {
    // const [profile, setProfile] = useState([]);

    // useEffect(() => {
    //     getProfile();
    // }, []);
    // const getProfile = () => {
    //     axios.get(`${API_URL}/getProfile")
    //         .then(res => {
    //             console.log(res.data);
    //             setProfile(res.data)
    //         })
    // }
    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <AsideLeft />
                        <Main />
                        <AsideRight />
                    </div>
                </div>
            </div>

        </div>);
}

export default Profile;