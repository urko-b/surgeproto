import React from 'react'

import { Link } from 'react-router-dom'

function AllList() {
    return (
        <div className="mb-3 border rounded list-sidebar overflow-hidden">
            <div className="box-title p-3 border-bottom">
                <h6 className="m-0">All List</h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="active">
                    <Link className="list-group-item p-3 list-group-item-action font-weight-medium text-primary" to="#services">1. Using our services</Link>
                    <ul className="list-group list-group-flush py-3 pl-5">
                        <li>
                            <Link className="list-group-item-action" to="#personal-data">A. Personal Data that we collect about you</Link>
                        </li>
                        <li className="mt-3">
                            <Link className="list-group-item-action" to="#information">B. Information that we collect automatically on our Sites</Link>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item list-group-item-action p-3">
                    <Link className="list-group-item-action" to="#privacy">2. Privacy and copyright protection</Link>
                </li>
                <li className="list-group-item list-group-item-action p-3">
                    <Link className="list-group-item-action" to="#yourContent">3. Your content in our services</Link>
                </li>
            </ul>
        </div>
    );
}

export default AllList;