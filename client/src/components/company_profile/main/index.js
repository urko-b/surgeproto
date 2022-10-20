import React from 'react'

import { Link } from "react-router-dom";
import TextBox from '../../common_common/TextBox';
import OverviewBox from '../../common_common/OverviewBox';
import Card from '../../common_common/Card';
import PostBox from '../../common_common/PostBox';
import PostDetailBox from '../../common_common/PostDetailBox';
import JobItem from '../../common_common/JobItem';

function Main() {
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="box shadow-sm rounded bg-white mb-3 overflow-hidden">
                <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Update</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Life</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="type" aria-selected="false">Reviews</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <TextBox title="About" text1="Google’s mission is to organize the world‘s information and make it universally accessible and useful." text2="Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself." />
                    <OverviewBox />
                    <div className="box shadow-sm border rounded bg-white mb-3">

                        <div className="box-title border-bottom p-3">
                            <h6 className="m-0">Locations</h6>
                        </div>
                        <div className="p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <Card url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.172354371!2d73.15671299623955!3d31.003573085499198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1575738201305!5m2!1sen!2sin" title="Postal Address" desc="PO Box 16122 Collins Street West Victoria 8007 Australia" />
                                </div>
                                <div className="col-md-6">
                                    <Card url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658166621!2d75.78663235513761!3d30.900473637624447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1575738867148!5m2!1sen!2sin" title="Envato HQ" desc="121 King Street, Melbourne Victoria 3000 Australia" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <PostBox />
                    <PostDetailBox />
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="box shadow-sm border rounded bg-white p-3">
                        <div className="row">
                            <JobItem job="UI/UX designer" company="Envato" location=" India, Punjab" img="img/l1.png" border="border" col="col-md-6" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                    <TextBox title="Careers at Google" text1="Google’s mission is to organize the world‘s information and make it universally accessible and useful." text2="Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself." />
                    <TextBox title="Careers at Google" text1="Google’s mission is to organize the world‘s information and make it universally accessible and useful." text2="Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself." />
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="type-tab">
                    <div className="box shadow-sm border rounded bg-white mb-3">
                        <div className="box-title border-bottom p-3">
                            <h6 className="m-0">40 Reviews</h6>
                        </div>
                        <div className="box-body p-3">
                            <div id="retro-comments">
                                <div className="reviews-members pt-0">
                                    <div className="media">
                                        <Link to="#"><img className="mr-3" src="img/p4.png" alt="" /></Link>
                                        <div className="media-body">
                                            <div className="form-members-body">
                                                <textarea rows="1" placeholder="Add a public comment..." className="form-control"></textarea>
                                            </div>
                                            <div className="form-members-footer d-flex align-items-center mt-2">
                                                <b>12,725 Comments</b>
                                                <span className="ml-auto"><button className="btn btn-light btn-sm" type="button">CANCEL</button> <button className="btn btn-primary btn-sm" type="button">COMMENT</button>     </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-members">
                                    <div className="media">
                                        <Link to="#"><img className="mr-3" src="img/p3.png" alt="" /></Link>
                                        <div className="media-body">
                                            <div className="reviews-members-header">
                                                <h6 className="mb-1"><Link className="text-black" to="#">Gurdeep Osahan </Link> <small className="text-gray">2 months ago</small></h6>
                                            </div>
                                            <div className="reviews-members-body">
                                                <p> reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items. Anyway the food was super specially their stone dessert.</p>
                                            </div>
                                            <div className="reviews-members-footer d-flex align-items-center">
                                                <Link className="total-like btn btn-outline-info btn-sm mr-1" to="#"><i className="feather-thumbs-up"></i> 123</Link> <Link className="total-like btn btn-outline-info btn-sm" to="#"><i className="feather-thumbs-down"></i> 02</Link>
                                                <span dir="rtl" className="total-like-user-main ml-2">
                                                    <div className="overlap-rounded-circle">
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p9.png" alt="" data-original-title="Sophia Lee" />
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p10.png" alt="" data-original-title="John Doe" />
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p11.png" alt="" data-original-title="Julia Cox" />
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p12.png" alt="" data-original-title="Robert Cook" />
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-members">
                                    <div className="media">
                                        <Link to="#"><img alt="" src="img/p2.png" className="mr-3" /></Link>
                                        <div className="media-body">
                                            <div className="reviews-members-header">
                                                <h6 className="mb-1"><Link to="#" className="text-black">Gurdeep Osahan </Link> <small className="text-gray">2 months ago</small></h6>
                                            </div>
                                            <div className="reviews-members-body">
                                                <p>Was here impromptu in their first week, reacthe last order. Even though they had Chefs in their open kitchen they weren’t flexible to dish out few more items.</p>
                                            </div>
                                            <div className="reviews-members-footer d-flex align-items-center">
                                                <Link to="#" className="total-like btn btn-outline-info btn-sm mr-1"><i className="feather-thumbs-up"></i> 123</Link> <Link to="#" className="total-like btn btn-outline-info btn-sm"><i className="feather-thumbs-down"></i> 02</Link>
                                                <span className="total-like-user-main ml-2" dir="rtl">
                                                    <div className="overlap-rounded-circle">
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p13.png" alt="" data-original-title="Sophia Lee" />
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p1.png" alt="" data-original-title="John Doe" />
                                                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p3.png" alt="" data-original-title="Robert Cook" />
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;