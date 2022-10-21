import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { API_URL } from '../../../config/api';

function Experience(props) {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();


    // console.log('profileid:');
    // console.log(profile._id);
    // console.log('delid:');
    // console.log(props.id);
    const [id, setId] = useState(profile._id);
    const [delId, setDelId] = useState(props.id);
    const [updateId, setUpdateId] = useState(props.id);
    const [title, setTitle] = useState(props.title);
    const [subTitle, setSubTitle] = useState(props.subTitle);
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);
    const [img, setImg] = useState(props.img);
    const [desc, setDesc] = useState(props.desc);


    const deleteItem = (e) => {
        e.preventDefault();

        axios.post(`${API_URL}/userProfile/updateUserProfile/deleteExperience/${id}`, {
            delId: delId
        })
            .then(() => {
                // navigate("/home");
                alert('This Experience deleted successfully!');
            })
            .catch(err => {
                console.log(err);
            })
    }


    const updateItem = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/updateExperience/${id}`, {
            updateId: updateId,
            title: title,
            company: subTitle,
            from: from,
            to: to,
            desc: desc
        })
            .then(() => {
                // navigate("/home");
                alert('This Experience updated successfully!');
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
    }

    $('experience-del-btn').on('click', function () {
        alert('asdf')
    });

    return (
        <div className={classnames('box-body p-3', props.border, props.publicId)}>
            <div className="d-flex align-items-top job-item-header pb-2">
                <div className="full-width">
                    {/* <h6 className="font-weight-bold text-dark mb-0">{title}</h6> */}
                    <input className="edit-input-title form-control font-weight-bold text-dark mb-0" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {/* <div className="text-truncate text-primary">{subTitle}</div> */}
                    <input className="edit-input-subtitle form-control text-truncate text-primary" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                    {/* <div className="small text-gray-500">{period}</div> */}
                    <span className='flex edit-input-date'>
                        <input type="date" className="small edit-input-from form-control text-gray-500"
                            placeholder="dd-mm-yyyy" value={from} min="1950-01-01" max="2050-12-31" onChange={(e) => setFrom(e.target.value)} />~
                        <input type="date" className="small edit-input-to form-control text-gray-500"
                            placeholder="dd-mm-yyyy" value={to} min="1950-01-01" max="2050-12-31" onChange={(e) => setTo(e.target.value)} /></span>
                </div>
                <img className="img-fluid ml-auto mb-auto" src={img} alt="" onChange={(e) => setImg(e.target.value)} />
            </div>
            {/* <p className="mb-0">{desc}</p> */}
            <textarea className='edit-input-desc form-control' value={desc} onChange={(e) => setDesc(e.target.value)} />
            <div className="p-1 save-del">
                <button data-toggle="tooltip" data-placement="top" data-original-title="Save" className="btn btn-info" onClick={updateItem}><i className="feather-save"></i></button>

                <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" del-target={props.publicId} className="btn btn-danger experience-del-btn" onClick={deleteItem}><i className="feather-trash-2"></i></button>
            </div>
        </div>
    );
}

export default Experience;