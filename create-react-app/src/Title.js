import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';




export default class Title extends Component {
    render() {
        return (
            <Row className="titleDiv">
                <Col xs={12} md={12}>

                        <div className="title">Gear Helper</div>
                        <div className="bottomNav">
                            For All Your Gear Helping Needs
                        </div>

                </Col>
            </Row>
        );
    }
}

