import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.css';



export default class Footer extends Component {
    render() {
        return (
            <div className="footerDiv">
                <Row>
                    <Col xs={12} md={12}>
                        <a className="btn btn-social-icon btn-facebook">
                            <span className="fa fa-facebook"></span>
                        </a>
                        <a className="btn btn-social-icon btn-google">
                            <span className="fa fa-google"></span>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <p>Copyright &copy; 2017</p>
                    </Col>
                    <Col xs={12} md={12}>
                        <p>Trevor Orgill - trevster80@hotmail.com</p>
                    </Col>
                </Row>
            </div>
        );
    };
}

