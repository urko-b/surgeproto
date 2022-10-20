import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-jquery-plugin";
import "bootstrap/dist/js/bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import setAuthToken from "./services/setAuthToken";
import UserService from "./services/user";

import UserContext from "./components/common/UserContext";

import Login from "./components/auth/Login";
import PrivateRoute from "./components/common/PrivateRoute";
import Register from "./components/auth/Register";

import Home from "./components/home";
import ComingSoon from './components/coming_soon';
import Jobs from './components/jobs';
import Profile from './components/profile';
import Connection from './components/connection';
import CompanyProfile from './components/company_profile';
import JobProfile from './components/job_profile';
import Messages from './components/messages';
import Notifications from './components/notifications';
import NotFound from './components/not_found';
import Faq from './components/faq';
import Terms from './components/terms';
import Privacy from './components/privacy';
import Blog from './components/blog';
import BlogSingle from './components/blog_single';
import Contact from './components/contact';
import Pricing from './components/pricing';
import Maintence from './components/maintence';
import Components from './components/components';
import EditProfile from './components/edit_profile';
import Admin from "./components/admin";
import PostJob from "./components/post_job";
import PostGig from "./components/post_gig";
import Gigs from "./components/gigs";
import GigProfile from "./components/gig_profile";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    let res = await UserService.getProfile();
    setUser(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ profile: profile, setProfile: setProfile }}>
        <Router>
          <Fragment>
            <Routes >
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path='/coming_soon' element={<PrivateRoute><ComingSoon /></PrivateRoute>} />
              <Route path='/jobs' element={<PrivateRoute><Jobs /></PrivateRoute>} />
              <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path='/connection' element={<PrivateRoute><Connection /></PrivateRoute>} />
              <Route path='/company_profile' element={<PrivateRoute><CompanyProfile /></PrivateRoute>} />
              <Route path='/job_profile' element={<PrivateRoute><JobProfile /></PrivateRoute>} />
              <Route path='/messages' element={<PrivateRoute><Messages /></PrivateRoute>} />
              <Route path='/notifications' element={<PrivateRoute><Notifications /></PrivateRoute>} />
              <Route path='/not_found' element={<PrivateRoute><NotFound /></PrivateRoute>} />
              <Route path='/faq' element={<PrivateRoute><Faq /></PrivateRoute>} />
              <Route path='/terms' element={<PrivateRoute><Terms /></PrivateRoute>} />
              <Route path='/privacy' element={<PrivateRoute><Privacy /></PrivateRoute>} />
              <Route path='/blog' element={<PrivateRoute><Blog /></PrivateRoute>} />
              <Route path='/blog_single' element={<PrivateRoute><BlogSingle /></PrivateRoute>} />
              <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
              <Route path='/pricing' element={<PrivateRoute><Pricing /></PrivateRoute>} />
              <Route path='/maintence' element={<PrivateRoute><Maintence /></PrivateRoute>} />
              <Route path='/components' element={<PrivateRoute><Components /></PrivateRoute>} />
              <Route path="/edit_profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
              <Route path="/post_job" element={<PrivateRoute><PostJob /></PrivateRoute>} />
              <Route path="/post_gig" element={<PrivateRoute><PostGig /></PrivateRoute>} />
              <Route path="/gigs" element={<PrivateRoute><Gigs /></PrivateRoute>} />
              <Route path='/gig_profile' element={<PrivateRoute><GigProfile /></PrivateRoute>} />
            </Routes >
          </Fragment>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App;
