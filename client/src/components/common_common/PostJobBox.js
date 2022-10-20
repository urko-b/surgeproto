import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

import UserContext from '../common/UserContext';
import { useNavigate } from 'react-router-dom';
import { API_URL } from  '../../../config/api';
// import { Link } from 'react-router-dom'

function PostJobBox() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();


    const postJob = () => {
        // e.preventDefault();
        axios.get(`${API_URL}/api/getProfile`)
            .then(res => {
                const profile = res.data;
                if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
                    alert("Please Connect your wallet!");
                } else {
                    navigate("/post_job");
                }
                // alert(res.data.walletAddress);
                // return profile;
            })

    }
    return (<div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
        <img src="img/job1.png" className="img-fluid" alt="" />
        <div className="p-3 border-bottom">
            <h6 className='font-weight-bold text-dark'>Post Job</h6>
            <p className="mb-0 text-muted">We are looking for talent</p>
        </div>
        <div className="p-3">
            <a className='btn btn-primary pl-4 pr-4' onClick={postJob}>POST A JOB </a>
        </div>
    </div>
    );
}

export default PostJobBox;