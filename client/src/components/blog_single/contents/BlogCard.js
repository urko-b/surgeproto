import React from 'react'

import { Link } from 'react-router-dom'

function BlogCard() {
    return (
        <div className="blog-card padding-card box shadow-sm rounded bg-white mb-3 border-0">
            <img className="card-img-top" src="img/blog/2.png" alt="" />
            <div className="card-body">
                <span className="badge badge-success">House/Villa</span>
                <h2>Possimus aut mollitia eum ipsum</h2>
                <h6 className="mb-3"><i className="feather-calendar"></i> March 09, 2020 / 3 Comments</h6>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum...
                </p>
                <p>
                    Praesent eget euismod nibh. Fusce ac tellus eu nisl lobortis maximus ac eget sapien. Nulla malesuada mauris non nulla imperdiet ullamcorper.
                </p>
                <p>Spacial has both a web app and an android app to make your website easy and always available. It offers you all the designs in collaboration with some smart people. Your projects will look great everywhere you go. Use new components that come included!</p>
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <blockquote className="margin-top-1x margin-bottom-1x">
                            <p className="font-weight-bold">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            <cite>Someone famous</cite>
                        </blockquote>
                    </div>
                </div>
                <p>
                    Focus on creating and growing your projects and websites, and we‘ll take care of spinning up new designs for your users and making sure they’re great. Work with all types of customers right out of the box while still getting paid in your preferred currency.
                </p>
                <p className="mb-0">Sed porta libero metus, nec feugiat enim pharetra vel. Sed vel sagittis augue. Donec hendrerit nibh ac dolor lobortis, eu varius odio sollicitudin. Proin non condimentum nulla, quis dictum leo. Vestibulum lobortis urna eu mauris viverra porttitor. Cras consequat leo condimentum lacus viverra sollicitudin. Donec dignissim ornare est, nec scelerisque purus mollis eu. Phasellus dictum suscipit ligula. Donec malesuada gravida velit. Nulla egestas diam in ligula mollis, nec tincidunt diam porta. Proin eleifend lacinia diam quis pretium. Sed lacinia varius nisi et euismod. Ut ac arcu vulputate, porta nibh non, ultricies erat. Nulla facilisi. </p>
            </div>
            <div className="card-footer border-0">
                <div className="footer-social"><span>Share</span> : &nbsp;
                    <Link to="#"><i className="feather-facebook"></i></Link>
                    <Link to="#"><i className="feather-twitter"></i></Link>
                    <Link to="#"><i className="feather-instagram"></i></Link>
                </div>
            </div>

        </div>
    );
}

export default BlogCard;