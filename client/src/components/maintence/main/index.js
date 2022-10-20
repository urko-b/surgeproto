import React from 'react'

import { Link } from 'react-router-dom'
import Svg from './Svg';

function Main() {
    return (
        <div className="col-md-12 text-center">
            <Svg />
            <h1 className="text-dark font-weight-bold">We're just tuning up a few things.</h1>
            <p className="lead mb-5">We apologize for the inconvenience but Front is currently undergoing planned maintenance.
            </p>
            <Link to="index.html" className="btn btn-primary btn-lg"> Check for Updates </Link>
            <Link to="https://wrapbootstrap.com/user/iamosahan" className="btn btn-light btn-lg"> Buy Now </Link>
        </div>);
}

export default Main;