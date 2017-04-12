import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Title from './Title';
import Footer from './Footer';

export default class BiS extends Component {
    render() {
        return (
            <div className="BiS">
                <Title></Title>
                <Navbar></Navbar><br/>
                <Row className="Head">
                    <Col xs={12} md={4}>
                        <img src="/img/Helm.png" alt="Helm"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Helmet:
                    </Col>
                </Row>
                <Row className="Neck">
                    <Col xs={12} md={4}>
                        <img src="/img/Neck.png" alt="Neck"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Neck:
                    </Col>
                </Row>
                <Row className="Shoulders">
                    <Col xs={12} md={4}>
                        <img src="/img/Shoulders.png" alt="Shoulders"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Shoulders:
                    </Col>
                </Row>
                <Row className="Chest">
                    <Col xs={12} md={4}>
                        <img src="/img/Chest.png" alt="Chest"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Chest:
                    </Col>
                </Row>
                <Row className="Waist">
                    <Col xs={12} md={4}>
                        <img src="/img/Waist.png" alt="Waist"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Waist:
                    </Col>
                </Row>
                <Row className="Legs">
                    <Col xs={12} md={4}>
                        <img src="/img/Legs.png" alt="Legs"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Legs:
                    </Col>
                </Row>
                <Row className="Feet">
                    <Col xs={12} md={4}>
                        <img src="/img/Feet.png" alt="Feet"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Feet:
                    </Col>
                </Row>
                <Row className="Wrists">
                    <Col xs={12} md={4}>
                        <img src="/img/Wrists.png" alt="Wrists"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Wrists:
                    </Col>
                </Row>
                <Row className="Hands">
                    <Col xs={12} md={4}>
                        <img src="/img/Hands.png" alt="Hands"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Hands:
                    </Col>
                </Row>
                <Row className="FingerOne">
                    <Col xs={12} md={4}>
                        <img src="/img/Finger.png" alt="1st Finger"/>
                    </Col>
                    <Col xs={12} md={8}>
                        1st Finger:
                    </Col>
                </Row>
                <Row className="FingerTwo">
                    <Col xs={12} md={4}>
                        <img src="/img/Finger.png" alt="2nd Finger"/>
                    </Col>
                    <Col xs={12} md={8}>
                        2nd Finger:
                    </Col>
                </Row>
                <Row className="TrinkitOne">
                    <Col xs={12} md={4}>
                        <img src="/img/Trinkit.png" alt="1st Trinkit"/>
                    </Col>
                    <Col xs={12} md={8}>
                        1st Trinkit:
                    </Col>
                </Row>
                <Row className="TrinkitTwo">
                    <Col xs={12} md={4}>
                        <img src="/img/Trinkit.png" alt="2nd Trinkit"/>
                    </Col>
                    <Col xs={12} md={8}>
                        2nd Trinkit:
                    </Col>
                </Row>
                <Row className="Back">
                    <Col xs={12} md={4}>
                        <img src="/img/Back.png" alt="Back"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Back:
                    </Col>
                </Row>
                <Row className="MainHand">
                    <Col xs={12} md={4}>
                        <img src="/img/MainHand.png" alt="Main-Hand"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Main-Hand:
                    </Col>
                </Row>
                <Row className="OffHand">
                    <Col xs={12} md={4}>
                        <img src="/img/OffHand.png" alt="Off-Hand"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Off-Hand:
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    };
}