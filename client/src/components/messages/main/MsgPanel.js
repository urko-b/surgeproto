import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import MsgItem from './MsgItem';

function MsgPanel(props) {
    const msgList = props.msgList;
    const userContext = useContext(UserContext);
    const profile = userContext.profile;

    // console.log('this is ');
    const id = props.userId;
    const myId = props.myId;
    // console.log(id);

    const [userProfile, setUserProfile] = useState();
    const [avatar, setAvatar] = useState('img/default_avatar.png');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');

    // useEffect(() => {
    //     // if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
    //     //     // navigate("/home");
    //     //     console.log('Profile reloaded!');
    //     //     getProfile();
    //     //     console.log("done");

    //     // }
    //     getUserProfile();
    // }, []);


    useEffect(() => {
        const interval = setInterval(async () => {
            await getUserProfile();
        }, 2000);
        return () => clearInterval(interval)
        // console.clear();

    }, []);

    // const getProfile = () => {
    //     axios.get("http://localhost:4000/api/getProfile")
    //         .then(res => {
    //             console.log(res.data);
    //             userContext.setProfile(res.data)
    //         })
    // }

    const getUserProfile = async () => {
        let response = await axios.get(`http://localhost:4000/api/userProfile/getUserProfile/${id}`, {
            id: id
        })
        let data = await response.data;
        setUserProfile(data);
        setName(data.name);
        setAvatar(data.avatar);
        setUsername(data.username);
    }

    // console.log('userProfile');
    // console.log(userProfile);

    const sendMsgSucNotify = () => toast.success('The message has been successfully sent to the Admin!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const sendMsg = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/msg/addMsgHim", {
            owner: id,
            msg: msg,
            opponent: myId,
            direction: 'come'
        })
        await axios.post("http://localhost:4000/api/msg/addMsgMe", {
            owner: myId,
            msg: msg,
            opponent: id,
            direction: 'go'
        })
        // await axios.post(`http://localhost:4000/api/userProfile/updateUserProfile/addConnection/${myId}`, {
        //     creator_id: id
        // })
        // await axios.post(`http://localhost:4000/api/userProfile/updateUserProfile/addConnection/${id}`, {
        //     creator_id: myId
        // })
        // sendMsgSucNotify();

        // alert(id + ',' + myId + ',' + msg)
        setMsg('')
        console.clear();
        // getProfile()
        getUserProfile();


    }
    return (
        <div id={"msg" + props.userId} className="container tab-pane fade">
            <div className="p-3 d-flex align-items-center  border-bottom osahan-post-header">
                <div className="font-weight-bold mr-1 overflow-hidden">
                    <div className="text-truncate">{name}
                    </div>
                    <div className="small text-truncate overflow-hidden text-black-50">{username}</div>
                </div>
                <span className="ml-auto">
                    <button type="button" className="btn btn-light btn-sm rounded">
                        <i className="feather-phone"></i>
                    </button>
                    <button type="button" className="btn btn-light btn-sm rounded">
                        <i className="feather-video"></i>
                    </button>
                    <div className="btn-group">
                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather-more-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
                            <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
                        </div>
                    </div>
                </span>
            </div>
            <div id='chatPanel' className="osahan-chat-box p-3 border-top border-bottom bg-light">

                {msgList &&
                    msgList.map((item, i) => {
                        return item.opponent == props.userId ?
                            <MsgItem key={i} myName={profile.name} direction={item.direction} createdAt={item.createdAt} msg={item.msg} myAvatar={profile.avatar} hisAvatar={avatar} hisName={name} /> : null

                    })
                }
            </div>
            <form onSubmit={sendMsg}>
                <div className="w-100 border-top border-bottom">
                    <textarea placeholder="Write a message…" className="form-control border-0 p-3 shadow-none" rows="2" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                </div>
                <div className="p-3 d-flex align-items-center">
                    <div className="overflow-hidden">
                        <button type="button" className="btn btn-light btn-sm rounded">
                            <i className="feather-image"></i>
                        </button>
                        <button type="button" className="btn btn-light btn-sm rounded">
                            <i className="feather-paperclip"></i>
                        </button>
                        <button type="button" className="btn btn-light btn-sm rounded">
                            <i className="feather-camera"></i>
                        </button>
                    </div>
                    <span className="ml-auto">
                        <button type="submit" className="btn btn-primary btn-sm rounded">
                            <i className="feather-send"></i> Send
                        </button>
                    </span>
                </div>
            </form>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    // theme='dark'
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
}

export default MsgPanel;