import React, { Component } from 'react'

export default class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
                    <a className="navbar-brand" href="#">NewsCenter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Business</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Entertainment</a>
                                </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">General</a>
                                </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Health</a>
                                </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Science</a>
                                </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Sports</a>
                                </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Technology</a>
                                </li>


                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
