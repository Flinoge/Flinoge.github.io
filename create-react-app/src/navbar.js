import React, { Component } from 'react';
import './nav.css'
import { Row, Col } from 'react-bootstrap';


import { Link } from "react-router";


export default class Navbar extends Component {
    render() {
        return (
            <Row className="navDiv">
                <Col xs={12} md={12} className="navMargin">
                    <header className="header">
                        <div className="constrain">
                            <nav className="navigation">
                                <span className="nav-toggle">
                                    <span className="trigger">&#9776;</span>
                                    <ul>
                                        <li><Link to="/">InputStats</Link></li>
                                        <li><Link to="BiS">Your BiS</Link></li>
                                        <li><Link to="Contact">Contact</Link></li>
                                    </ul>
                                </span>
                            </nav>
                        </div>
                    </header>
                </Col>
            </Row>
        );
    };
}

