import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import MyForm from './Form';
import Title from './Title';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
          <div className="App">
              <Title></Title>
              <Navbar></Navbar>
              <Row>
                  <Col xs={12} md={12}>
                      <div id="HelloWorld">Contact</div>
                      <MyForm></MyForm>
                  </Col>
              </Row>
              <Footer></Footer>
          </div>
    );
  };
}


