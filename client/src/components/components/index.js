import React from 'react'

import { Link } from "react-router-dom";

import Nav from '../layout/Nav';

function Components() {
    return (
        <div>
            <Nav />

            <div className="bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-3 border rounded list-sidebar overflow-hidden">
                                <div className="box-title p-3 border-bottom">
                                    <h6 className="m-0">Components</h6>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Alerts">Alerts</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Badges">Badges</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Breadcrumb">Breadcrumb</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Buttons">Buttons</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Button-group
                              ">Button group
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Cards">Cards</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Collapse">Collapse</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Dropdowns">Dropdowns</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Forms">Forms</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Input-group
                              ">Input group
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Jumbotron">Jumbotron</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Modal">Modal</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#List-group
                              ">List group
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Navs">Navs</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Navbar">Navbar</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Pagination">Pagination</Link>
                                    </li>
                                    <li>
                                        <Link className="p-3 d-inline-block w-100 border-bottom text-muted" to="#Progress">Progress</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div id="Alerts" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Alerts</h2>
                                <div className="alert alert-primary" role="alert">
                                    This is a primary alert???check it out!
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    This is a secondary alert???check it out!
                                </div>
                                <div className="alert alert-success" role="alert">
                                    This is a success alert???check it out!
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    This is a danger alert???check it out!
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    This is a warning alert???check it out!
                                </div>
                                <div className="alert alert-info" role="alert">
                                    This is a info alert???check it out!
                                </div>
                                <div className="alert alert-light" role="alert">
                                    This is a light alert???check it out!
                                </div>
                                <div className="alert alert-dark" role="alert">
                                    This is a dark alert???check it out!
                                </div>
                                <div className="alert alert-primary" role="alert">
                                    This is a primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    This is a secondary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-success" role="alert">
                                    This is a success alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    This is a danger alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    This is a warning alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-info" role="alert">
                                    This is a info alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-light" role="alert">
                                    This is a light alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-dark" role="alert">
                                    This is a dark alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Well done!</h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                    <hr />
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div id="Badges" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Badges</h2>
                                <h1>Example heading <span className="badge badge-secondary">New</span></h1>
                                <h2>Example heading <span className="badge badge-secondary">New</span></h2>
                                <h3>Example heading <span className="badge badge-secondary">New</span></h3>
                                <h4>Example heading <span className="badge badge-secondary">New</span></h4>
                                <h5>Example heading <span className="badge badge-secondary">New</span></h5>
                                <h6>Example heading <span className="badge badge-secondary">New</span></h6>
                                <button type="button" className="btn btn-primary">
                                    Notifications <span className="badge badge-light">4</span>
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Profile <span className="badge badge-light">9</span>
                                    <span className="sr-only">unread messages</span>
                                </button>
                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-secondary">Secondary</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-danger">Danger</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-light">Light</span>
                                <span className="badge badge-dark">Dark</span>
                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-secondary">Secondary</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-danger">Danger</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-light">Light</span>
                                <span className="badge badge-dark">Dark</span>
                                <Link to="#" className="badge badge-primary">Primary</Link>
                                <Link to="#" className="badge badge-secondary">Secondary</Link>
                                <Link to="#" className="badge badge-success">Success</Link>
                                <Link to="#" className="badge badge-danger">Danger</Link>
                                <Link to="#" className="badge badge-warning">Warning</Link>
                                <Link to="#" className="badge badge-info">Info</Link>
                                <Link to="#" className="badge badge-light">Light</Link>
                                <Link to="#" className="badge badge-dark">Dark</Link>
                                <hr />
                                <span className="badge badge-pill badge-primary">Primary</span>
                                <span className="badge badge-pill badge-secondary">Secondary</span>
                                <span className="badge badge-pill badge-success">Success</span>
                                <span className="badge badge-pill badge-danger">Danger</span>
                                <span className="badge badge-pill badge-warning">Warning</span>
                                <span className="badge badge-pill badge-info">Info</span>
                                <span className="badge badge-pill badge-light">Light</span>
                                <span className="badge badge-pill badge-dark">Dark</span>
                            </div>
                            <div id="Breadcrumb" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Breadcrumb</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </div>
                            <div id="Buttons" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Buttons</h2>
                                <button type="button" className="btn btn-primary">Primary</button>
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-light">Light</button>
                                <button type="button" className="btn btn-dark">Dark</button>
                                <button type="button" className="btn btn-link">Link</button>
                                <hr />
                                <Link className="btn btn-primary" to="#" role="button">Link</Link>
                                <button className="btn btn-primary" type="submit">Button</button>
                                <input className="btn btn-primary" type="button" value="Input" />
                                <input className="btn btn-primary" type="submit" value="Submit" />
                                <input className="btn btn-primary" type="reset" value="Reset" />
                                <hr />
                                <button type="button" className="btn btn-outline-primary">Primary</button>
                                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn btn-outline-success">Success</button>
                                <button type="button" className="btn btn-outline-danger">Danger</button>
                                <button type="button" className="btn btn-outline-warning">Warning</button>
                                <button type="button" className="btn btn-outline-info">Info</button>
                                <button type="button" className="btn btn-outline-light">Light</button>
                                <button type="button" className="btn btn-outline-dark">Dark</button>
                                <hr />
                                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                                <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                                <hr />
                                <button type="button" className="btn btn-primary btn-sm">Small button</button>
                                <button type="button" className="btn btn-secondary btn-sm">Small button</button>
                                <hr />
                                <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                                <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
                                <hr />
                                <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
                                <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
                                <hr />
                                <Link to="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</Link>
                                <Link to="#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</Link>
                                <hr />
                                <div className="btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary active">
                                        <input type="checkbox" checked autocomplete="off" /> Checked
                                    </label>
                                </div>
                                <hr />
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary active">
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
                                    </label>
                                </div>
                            </div>
                            <div id="Button-group" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Button group</h2>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>
                                <hr />
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">2</button>
                                        <button type="button" className="btn btn-secondary">3</button>
                                        <button type="button" className="btn btn-secondary">4</button>
                                    </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-secondary">5</button>
                                        <button type="button" className="btn btn-secondary">6</button>
                                        <button type="button" className="btn btn-secondary">7</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-secondary">8</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">2</button>
                                        <button type="button" className="btn btn-secondary">3</button>
                                        <button type="button" className="btn btn-secondary">4</button>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text" id="btnGroupAddon">@</div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                                    </div>
                                </div>
                                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">2</button>
                                        <button type="button" className="btn btn-secondary">3</button>
                                        <button type="button" className="btn btn-secondary">4</button>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text" id="btnGroupAddon2">@</div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                                    </div>
                                </div>
                                <hr />
                                <div className="bd-example">
                                    <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>
                                    <br />
                                    <div className="btn-group my-3" role="group" aria-label="Default button group">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>
                                    <br />
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                        <button type="button" className="btn btn-secondary">Left</button>
                                        <button type="button" className="btn btn-secondary">Middle</button>
                                        <button type="button" className="btn btn-secondary">Right</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                    <button type="button" className="btn btn-secondary">1</button>
                                    <button type="button" className="btn btn-secondary">2</button>
                                    <div className="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <Link className="dropdown-item" to="#">Dropdown link</Link>
                                            <Link className="dropdown-item" to="#">Dropdown link</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Cards" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Cards</h2>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="img/job1.png" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="card-link">Card link</Link>
                                        <Link to="#" className="card-link">Another link</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="img/job1.png" alt="" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="img/job1.png" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to="#" className="card-link">Card link</Link>
                                        <Link to="#" className="card-link">Another link</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                                <div className="card text-center" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                                <div className="card text-right" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="card text-center">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="#">Active</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Link</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="#">Disabled</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Primary card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Secondary card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Success card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Danger card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Warning card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Info card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Light card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Dark card title</h5>
                                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-group">
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-group">
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-columns">
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title that wraps to a new line</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card p-3">
                                        <blockquote className="blockquote mb-0 card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="img/job1.png" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card bg-primary text-white text-center p-3">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                            <footer className="blockquote-footer text-white">
                                                <small>
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card p-3 text-right">
                                        <blockquote className="blockquote mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Collapse" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Collapse</h2>
                                <p>
                                    <Link className="btn btn-primary" data-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Link with to
                                    </Link>
                                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Button with data-target
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    <Link className="btn btn-primary" data-toggle="collapse" to="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</Link>
                                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                                            <div className="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Collapsible Group Item #1
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Collapsible Group Item #2
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Collapsible Group Item #3
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Dropdowns" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Dropdowns</h2>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown show">
                                    <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown link
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger">Action</button>
                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Large button
                                    </button>
                                    <div className="dropdown-menu">
                                        ...
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-secondary btn-lg" type="button">
                                        Large split button
                                    </button>
                                    <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        ...
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Small button
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-secondary btn-sm" type="button">
                                        Small split button
                                    </button>
                                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group dropright">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropright
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </div>
                                </div>
                                <div className="btn-group dropright">
                                    <button type="button" className="btn btn-secondary">
                                        Split dropright
                                    </button>
                                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropright</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <h6 className="dropdown-header">Dropdown header</h6>
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Right-aligned menu
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="border">
                                    <form className="px-4 py-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                            <label className="form-check-label" htmlFor="dropdownCheck">
                                                Remember me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">New around here? Sign up</Link>
                                    <Link className="dropdown-item" to="#">Forgot password?</Link>
                                </div>
                                <hr />
                                <form className="border p-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword2">Password</label>
                                        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                                    </div>
                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                        <label className="form-check-label" htmlFor="dropdownCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                            <div id="Forms" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Forms</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check mb-3">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                        <select multiple className="form-control" id="exampleFormControlSelect2">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </form>
                                <hr />
                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                                <input className="form-control" type="text" placeholder="Default input" />
                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
                                <hr />
                                <select className="form-control form-control-lg">
                                    <option>Large select</option>
                                </select>
                                <select className="form-control">
                                    <option>Default select</option>
                                </select>
                                <select className="form-control form-control-sm">
                                    <option>Small select</option>
                                </select>
                                <hr />
                                <input className="form-control" type="text" placeholder="Readonly input here???" readonly />
                                <hr />
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form className="form-inline">
                                    <div className="form-group mb-2">
                                        <label htmlFor="staticEmail2" className="sr-only">Email</label>
                                        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                                    </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                                </form>
                                <hr />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                                    <label className="form-check-label" htmlFor="defaultCheck2">
                                        Disabled checkbox
                                    </label>
                                </div>
                                <hr />
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Second default radio
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Disabled radio
                                    </label>
                                </div>
                                <hr />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                                </div>
                                <hr />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                                </div>
                                <hr />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Example label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Another label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress2">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State</label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                        </div>
                                    </div>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                    <label className="form-check-label" htmlFor="gridRadios1">
                                                        First radio
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                    <label className="form-check-label" htmlFor="gridRadios2">
                                                        Second radio
                                                    </label>
                                                </div>
                                                <div className="form-check disabled">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                                    <label className="form-check-label" htmlFor="gridRadios3">
                                                        Third disabled radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-2">Checkbox</div>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" htmlFor="gridCheck1">
                                                    Example checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row">
                                        <div className="col-7">
                                            <input type="text" className="form-control" placeholder="City" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="State" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Zip" />
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                        </div>
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-sm-3 my-1">
                                            <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                            <input type="text" className="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
                                        </div>
                                        <div className="col-sm-3 my-1">
                                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-auto my-1">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
                                                <label className="form-check-label" htmlFor="autoSizingCheck2">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-auto my-1">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto my-1">
                                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Preference</label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto my-1">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember my preference</label>
                                            </div>
                                        </div>
                                        <div className="col-auto my-1">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form className="form-inline">
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
                                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                                    </div>
                                    <div className="form-check mb-2 mr-sm-2">
                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                        <label className="form-check-label" htmlFor="inlineFormCheck">
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                </form>
                                <hr />
                                <form className="form-inline">
                                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Preference</label>
                                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                        <label className="custom-control-label" htmlFor="customControlInline">Remember my preference</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary my-1">Submit</button>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto my-1">
                                            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto my-1">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember my preference</label>
                                            </div>
                                        </div>
                                        <div className="col-auto my-1">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <label htmlFor="inputPassword5">Password</label>
                                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </small>
                                <hr />
                                <form className="form-inline">
                                    <div className="form-group">
                                        <label htmlFor="inputPassword6">Password</label>
                                        <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                        <small id="passwordHelpInline" className="text-muted">
                                            Must be 8-20 characters long.
                                        </small>
                                    </div>
                                </form>
                                <hr />
                                <form>
                                    <fieldset disabled >
                                        <div className="form-group">
                                            <label htmlFor="disabledTextInput">Disabled input</label>
                                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="disabledSelect">Disabled select menu</label>
                                            <select id="disabledSelect" className="form-control">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                                                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                                    Can't check this
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </fieldset>
                                </form>
                                <hr />
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom01">First name</label>
                                            <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom02">Last name</label>
                                            <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustomUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom03">City</label>
                                            <input type="text" className="form-control" id="validationCustom03" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom04">State</label>
                                            <select className="custom-select" id="validationCustom04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom05">Zip</label>
                                            <input type="text" className="form-control" id="validationCustom05" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <hr />
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationServer01">First name</label>
                                            <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationServer02">Last name</label>
                                            <input type="text" className="form-control is-valid" id="validationServer02" value="Otto" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationServerUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                                </div>
                                                <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationServer03">City</label>
                                            <input type="text" className="form-control is-invalid" id="validationServer03" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer04">State</label>
                                            <select className="custom-select is-invalid" id="validationServer04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer05">Zip</label>
                                            <input type="text" className="form-control is-invalid" id="validationServer05" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                                            <label className="form-check-label" htmlFor="invalidCheck3">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <hr />
                                <form className="was-validated">
                                    <div className="mb-3">
                                        <label htmlFor="validationTextarea">Textarea</label>
                                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                        <div className="invalid-feedback">
                                            Please enter a message in the textarea.
                                        </div>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                        <label className="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</label>
                                        <div className="invalid-feedback">Example invalid feedback text</div>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
                                        <label className="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-3">
                                        <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
                                        <label className="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</label>
                                        <div className="invalid-feedback">More example invalid feedback text</div>
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" required>
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                                    </div>
                                </form>
                                <hr />
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltip01">First name</label>
                                            <input type="text" className="form-control" id="validationTooltip01" value="Mark" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltip02">Last name</label>
                                            <input type="text" className="form-control" id="validationTooltip02" value="Otto" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltipUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                                                <div className="invalid-tooltip">
                                                    Please choose a unique and valid username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationTooltip03">City</label>
                                            <input type="text" className="form-control" id="validationTooltip03" required />
                                            <div className="invalid-tooltip">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationTooltip04">State</label>
                                            <select className="custom-select" id="validationTooltip04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-tooltip">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationTooltip05">Zip</label>
                                            <input type="text" className="form-control" id="validationTooltip05" required />
                                            <div className="invalid-tooltip">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <form className="needs-validation was-validated" noValidate="">
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltip01">First name</label>
                                            <input type="text" className="form-control" id="validationTooltip01" value="Mark" required="" />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltip02">Last name</label>
                                            <input type="text" className="form-control" id="validationTooltip02" value="Otto" required="" />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationTooltipUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required="" />
                                                <div className="invalid-tooltip">
                                                    Please choose a unique and valid username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationTooltip03">City</label>
                                            <input type="text" className="form-control" id="validationTooltip03" required="" />
                                            <div className="invalid-tooltip">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationTooltip04">State</label>
                                            <select className="custom-select" id="validationTooltip04" required="">
                                                <option selected="" disabled="" value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-tooltip">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationTooltip05">Zip</label>
                                            <input type="text" className="form-control" id="validationTooltip05" required="" />
                                            <div className="invalid-tooltip">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <hr />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                                </div>
                                <hr />
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                                </div>
                                <hr />
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline1">Toggle this custom radio</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline2">Or toggle this other custom radio</label>
                                </div>
                                <hr />
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheckDisabled1" disabled />
                                    <label className="custom-control-label" htmlFor="customCheckDisabled1">Check this custom checkbox</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" name="radioDisabled" id="customRadioDisabled2" className="custom-control-input" disabled />
                                    <label className="custom-control-label" htmlFor="customRadioDisabled2">Toggle this custom radio</label>
                                </div>
                                <hr />
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                    <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                                    <label className="custom-control-label" htmlFor="customSwitch2">Disabled switch element</label>
                                </div>
                                <hr />
                                <select className="custom-select custom-select-lg mb-3">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="custom-select custom-select-sm">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <hr />
                                <label htmlFor="customRange2">Example range</label>
                                <input type="range" className="custom-range" min="0" max="5" id="customRange2" />
                                <hr />
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                </div>
                                <hr />
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFileLang" lang="es" />
                                    <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
                                </div>
                                <hr />
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFileLangHTML" />
                                    <label className="custom-file-label" htmlFor="customFileLangHTML" data-browse="Bestand kiezen">Voeg je document toe</label>
                                </div>
                            </div>
                            <div id="Input-group" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Input group</h2>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                </div>
                                <label htmlFor="basic-url">Your vanity URL</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                    </div>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> SOL</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With textarea</span>
                                    </div>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                                <hr />
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">@</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <hr />
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="Checkbox for following text input" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with checkbox" />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="radio" aria-label="Radio button for following text input" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with radio button" />
                                </div>
                                <hr />
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">First and last name</span>
                                    </div>
                                    <input type="text" aria-label="First name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> SOL</span>
                                        <span className="input-group-text">0.00</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"> SOL</span>
                                        <span className="input-group-text">0.00</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend" id="button-addon3">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                                    <div className="input-group-append" id="button-addon4">
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                        <button className="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                                    </div>
                                </div>
                            </div>
                            <div id="Jumbotron" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Jumbotron</h2>
                                <div className="jumbotron">
                                    <h1 className="display-4">Hello, world!</h1>
                                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <hr className="my-4" />
                                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                                    <Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link>
                                </div>
                                <hr />
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">Fluid jumbotron</h1>
                                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="Modal" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Modal</h2>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Launch demo modal
                                </button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                                    Launch static backdrop modal
                                </button>
                                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                    Launch demo modal
                                </button>
                                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                                    Launch demo modal
                                </button>
                                <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Launch demo modal
                                </button>
                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>
                                <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-xl" role="document">
                                        <div className="modal-content">
                                            ...
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            ...
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
                                <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="List-group" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">List group</h2>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <hr />
                                <ul className="list-group">
                                    <li className="list-group-item active">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <hr />
                                <ul className="list-group">
                                    <li className="list-group-item active">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <hr />
                                <div className="list-group">
                                    <Link to="#" className="list-group-item list-group-item-action active">
                                        Cras justo odio
                                    </Link>
                                    <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                                    <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
                                    <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                                    <Link to="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</Link>
                                </div>
                                <hr />
                                <div className="list-group">
                                    <button type="button" className="list-group-item list-group-item-action active">
                                        Cras justo odio
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                                    <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
                                    <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                                    <button type="button" className="list-group-item list-group-item-action" disabled >Vestibulum at eros</button>
                                </div>
                                <hr />
                                <ul className="list-group list-group-horizontal">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                </ul>
                                <hr />
                                <ul className="list-group">
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                                    <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                                    <li className="list-group-item list-group-item-success">A simple success list group item</li>
                                    <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                                    <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                                    <li className="list-group-item list-group-item-info">A simple info list group item</li>
                                    <li className="list-group-item list-group-item-light">A simple light list group item</li>
                                    <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                                </ul>
                                <hr />
                                <div className="list-group">
                                    <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</Link>
                                </div>
                                <hr />
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Cras justo odio
                                        <span className="badge badge-primary badge-pill">14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Dapibus ac facilisis in
                                        <span className="badge badge-primary badge-pill">2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Morbi leo risus
                                        <span className="badge badge-primary badge-pill">1</span>
                                    </li>
                                </ul>
                                <hr />
                                <div className="list-group">
                                    <Link to="#" className="list-group-item list-group-item-action active">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">List group item heading</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1 text-white">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small>Donec id elit non mi porta.</small>
                                    </Link>
                                    <Link to="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">List group item heading</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </Link>
                                    <Link to="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">List group item heading</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </Link>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <div className="list-group" id="list-tab" role="tablist">
                                            <Link className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" to="#list-home" role="tab" aria-controls="home">Home</Link>
                                            <Link className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" to="#list-profile" role="tab" aria-controls="profile">Profile</Link>
                                            <Link className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" to="#list-messages" role="tab" aria-controls="messages">Messages</Link>
                                            <Link className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" to="#list-settings" role="tab" aria-controls="settings">Settings</Link>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Navs" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Navs</h2>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <nav className="nav">
                                    <Link className="nav-link active" to="#">Active</Link>
                                    <Link className="nav-link" to="#">Link</Link>
                                    <Link className="nav-link" to="#">Link</Link>
                                    <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                </nav>
                                <hr />
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <nav className="nav flex-column">
                                    <Link className="nav-link active" to="#">Active</Link>
                                    <Link className="nav-link" to="#">Link</Link>
                                    <Link className="nav-link" to="#">Link</Link>
                                    <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                </nav>
                                <hr />
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav nav-pills nav-fill">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Much longer nav link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="#">Active</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="#">Separated link</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Link</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</Link>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                </div>
                                <hr />
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="pills-home-tab" data-toggle="pill" to="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="pills-profile-tab" data-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="pills-contact-tab" data-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</Link>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-3">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <Link className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</Link>
                                            <Link className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</Link>
                                            <Link className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</Link>
                                            <Link className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</Link>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div id="Navbar" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Navbar</h2>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Link</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                    <div className="dropdown-divider"></div>
                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                </nav>
                                <nav className="navbar navbar-light bg-light">
                                    <span className="navbar-brand mb-0 h1">Navbar</span>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Features</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Pricing</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <Link className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></Link>
                                            <Link className="nav-item nav-link" to="#">Features</Link>
                                            <Link className="nav-item nav-link" to="#">Pricing</Link>
                                            <Link className="nav-item nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                        </div>
                                    </div>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Features</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Pricing</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown link
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-light bg-light">
                                    <Link className="navbar-brand">Navbar</Link>
                                    <form className="form-inline">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </nav>
                                <hr />
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar w/ text</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarText">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Features</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Pricing</Link>
                                            </li>
                                        </ul>
                                        <span className="navbar-text">
                                            Navbar text with an inline element
                                        </span>
                                    </div>
                                </nav>
                                <hr />
                                <div className="bd-example">
                                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                        <Link className="navbar-brand" to="#">Navbar</Link>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarColor01">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Features</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Pricing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">About</Link>
                                                </li>
                                            </ul>
                                            <form className="form-inline">
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                                        <Link className="navbar-brand" to="#">Navbar</Link>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarColor02">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Features</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Pricing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">About</Link>
                                                </li>
                                            </ul>
                                            <form className="form-inline">
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                                        <Link className="navbar-brand" to="#">Navbar</Link>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarColor03">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Features</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">Pricing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#">About</Link>
                                                </li>
                                            </ul>
                                            <form className="form-inline">
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                                <hr />
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="#">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Link</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                            </div> */}
                            <div id="Pagination" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Pagination</h2>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item active" aria-current="page">
                                            <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">
                                                2
                                                <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="...">
                                    <ul className="pagination pagination-lg">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">
                                                1
                                                <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="...">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">
                                                1
                                                <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <hr />
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div id="Progress" className="pb-5 mb-5 border-bottom">
                                <h2 className="h5">Progress</h2>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress">
                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                                <hr />
                                <div className="progress mb-2" style={{ height: "1px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress" style={{ height: "20px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress mb-2">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr />
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Components;