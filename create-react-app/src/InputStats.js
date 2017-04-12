import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import StatsForm from './StatsForm';
import Title from './Title';
import Footer from './Footer';

export default class InputStats extends Component {
    render() {
        return (
            <div className="InputStats">
                <Title></Title>
                <Navbar></Navbar>
                <Row>
                    <Col xs={12} md={12}>
                        <div id="HelloWorld">Input Stats</div>
                        <StatsForm></StatsForm>
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    };
}