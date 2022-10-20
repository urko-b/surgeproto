import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobItem from '../../common_common/JobItem';
import Slider from "react-slick";
import { Link } from 'react-router-dom'

function ImgSliderBox() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
            <div className="osahan-slider">
                <div className="osahan-slider-item " style={{ paddingTop: '16px' }}>
                    <Slider {...settings}>
                        {/* 
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/1.jpg" className="img-fluid slider-img" alt="" />
                        </div> */}
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/11.jfif" className="img-fluid slider-img" alt="" />
                        </div>
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/2.jpg" className="img-fluid slider-img" alt="" />
                        </div>
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/3.jpeg" className="img-fluid slider-img" alt="" />
                        </div>
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/4.jpg" className="img-fluid slider-img" alt="" />
                        </div>
                        {/* <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/5.jpg" className="img-fluid slider-img" alt="" />
                        </div> */}
                        {/* <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/6.jpg" className="img-fluid slider-img" alt="" />
                        </div> */}
                        <div className="box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/8.jpg" className="img-fluid slider-img" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ImgSliderBox;