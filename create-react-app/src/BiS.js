import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Title from './Title';
import Footer from './Footer';
import myJson from 'json/myJson.json';

export default class BiS extends Component {

    getItemInfo(){
        /*

        This of Weapons and their subclasses
         {
             "class": 2,
             "name": "Weapon",
             "subclasses": [{
                 "subclass": 1378,
                 "name": "Two-Handed Melee Weapon"
                 }, {
                 "subclass": 41617,
                 "name": "One-Handed Melee Weapon"
                 }, {
                 "subclass": 41105,
                 "name": "One-Handed Melee Weapon"
                 }, {
                 "subclass": 174067,
                 "name": "Melee Weapon"
                 }, {
                 "subclass": 173555,
                 "name": "Melee Weapon"
                 }, {
                 "subclass": 0,
                 "name": "Axe"
                 }, {
                 "subclass": 1,
                 "name": "Axe"
                 }, {
                 "subclass": 2,
                 "name": "Bow"
                 }, {
                 "subclass": 3,
                 "name": "Gun"
                 }, {
                 "subclass": 4,
                 "name": "Mace"
                 }, {
                 "subclass": 5,
                 "name": "Mace"
                 }, {
                 "subclass": 6,
                 "name": "Polearm"
                 }, {
                 "subclass": 7,
                 "name": "Sword"
                 }, {
                 "subclass": 8,
                 "name": "Sword"
                 }, {
                 "subclass": 262156,
                 "name": "Ranged Weapon"
                 }, {
                 "subclass": 9,
                 "name": "Warglaives"
                 }, {
                 "subclass": 10,
                 "name": "Staff"
                 }, {
                 "subclass": 11,
                 "name": "Bear Claws"
                 }, {
                 "subclass": 12,
                 "name": "Cat Claws"
                 }, {
                 "subclass": 13,
                 "name": "Fist Weapon"
                 }, {
                 "subclass": 14,
                 "name": "Miscellaneous"
                 }, {
                 "subclass": 15,
                 "name": "Dagger"
                 }, {
                 "subclass": 16,
                 "name": "Thrown"
                 }, {
                 "subclass": 17,
                 "name": "Spear"
                 }, {
                 "subclass": 18,
                 "name": "Crossbow"
                 }, {
                 "subclass": 19,
                 "name": "Wand"
                 }, {
                 "subclass": 20,
                 "name": "Fishing Pole"
             }]
         }
        List of Armors and their Subclasses
         {
             "class": 4,
             "name": "Armor",
             "subclasses": [{
                 "subclass": 2,
                 "name": "Leather"
                 }, {
                 "subclass": 3,
                 "name": "Mail"
                 }, {
                 "subclass": 4,
                 "name": "Plate"
                 }, {
                 "subclass": 5,
                 "name": "Cosmetic"
                 }, {
                 "subclass": 6,
                 "name": "Shield"
                 }, {
                 "subclass": 7,
                 "name": "Libram"
                 }, {
                 "subclass": 8,
                 "name": "Idol"
                 }, {
                 "subclass": 9,
                 "name": "Totem"
                 }, {
                 "subclass": 10,
                 "name": "Sigil"
                 }, {
                 "subclass": 11,
                 "name": "Relic"
                 }, {
                 "subclass": 96,
                 "name": "Shield"
                 }, {
                 "subclass": 0,
                 "name": "Miscellaneous"
                 }, {
                 "subclass": 1,
                 "name": "Cloth"
             }]
         }
         */
        // myJson.inventoryType ------ The equipping slot
        // myJson.itemClass -----The Item Slot
        // myJson.icon -------The Icon we get
        // myJson.bonusStats[].stat/amount ------The stats an item has
        // myJson.name  -------Where we get the name
        // http://media.blizzard.com/wow/icons/56/inv_robe_cloth_raidmage_q_01.jpg;  ------Example for Icon
        // Setting all of the Images
        document.getElementById("imgHelm").src = "";
        document.getElementById("imgNeck").src = "";
        document.getElementById("imgShoulders").src = "";
        document.getElementById("imgChest").src = "";
        document.getElementById("imgWaist").src = "";
        document.getElementById("imgLegs").src = "";
        document.getElementById("imgFeet").src = "";
        document.getElementById("imgWrists").src = "";
        document.getElementById("imgHands").src = "";
        document.getElementById("imgFingerOne").src = "";
        document.getElementById("imgFingerTwo").src = "";
        document.getElementById("imgTrinkitOne").src = "";
        document.getElementById("imgTrinkitTwo").src = "";
        document.getElementById("imgBack").src = "";
        document.getElementById("imgMainHand").src = "";
        document.getElementById("imgOffHand").src = "";
        // Setting all of the Item Names
        document.getElementById("headName").innerHTML = "";
        document.getElementById("neckName").innerHTML = "";
        document.getElementById("shouldersName").innerHTML = "";
        document.getElementById("chestName").innerHTML = "";
        document.getElementById("waistName").innerHTML = "";
        document.getElementById("legsName").innerHTML = "";
        document.getElementById("feetName").innerHTML = "";
        document.getElementById("wristsName").innerHTML = "";
        document.getElementById("handsName").innerHTML = "";
        document.getElementById("fingeroneName").innerHTML = "";
        document.getElementById("fingertwoName").innerHTML = "";
        document.getElementById("trinkitoneName").innerHTML = "";
        document.getElementById("trinkittwoName").innerHTML = "";
        document.getElementById("backName").innerHTML = "";
        document.getElementById("mainhandName").innerHTML = "";
        document.getElementById("offhandName").innerHTML = "";
    }

    render() {
        return (
            <div className="BiS">
                <Title></Title>
                <Navbar></Navbar><br/>
                <Row className="Head">
                    <Col xs={12} md={4}>
                        <img id="imgHelm" src="img/Helm.png" alt="Helm"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Helmet: <span id="headName"></span>
                    </Col>
                </Row>
                <Row className="Neck">
                    <Col xs={12} md={4}>
                        <img id="imgNeck" src="img/Neck.png" alt="Neck"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Neck: <span id="neckName"></span>
                    </Col>
                </Row>
                <Row className="Shoulders">
                    <Col xs={12} md={4}>
                        <img id="imgShoulders" src="img/Shoulders.png" alt="Shoulders"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Shoulders: <span id="shouldersName"></span>
                    </Col>
                </Row>
                <Row className="Chest">
                    <Col xs={12} md={4}>
                        <img id="imgChest" src="img/Chest.png" alt="Chest"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Chest: <span id="chestName"></span>
                    </Col>
                </Row>
                <Row className="Waist">
                    <Col xs={12} md={4}>
                        <img id="imgWaist" src="img/Waist.png" alt="Waist"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Waist: <span id="waistName"></span>
                    </Col>
                </Row>
                <Row className="Legs">
                    <Col xs={12} md={4}>
                        <img id="imgLegs" src="img/Legs.png" alt="Legs"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Legs: <span id="legsName"></span>
                    </Col>
                </Row>
                <Row className="Feet">
                    <Col xs={12} md={4}>
                        <img id="imgFeet" src="img/Feet.png" alt="Feet"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Feet: <span id="feetName"></span>
                    </Col>
                </Row>
                <Row className="Wrists">
                    <Col xs={12} md={4}>
                        <img id="imgWrists" src="img/Wrists.png" alt="Wrists"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Wrists: <span id="wristsName"></span>
                    </Col>
                </Row>
                <Row className="Hands">
                    <Col xs={12} md={4}>
                        <img id="imgHands" src="img/Hands.png" alt="Hands"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Hands: <span id="handsName"></span>
                    </Col>
                </Row>
                <Row className="FingerOne">
                    <Col xs={12} md={4}>
                        <img id="imgFingerOne" src="img/Finger.png" alt="1st Finger"/>
                    </Col>
                    <Col xs={12} md={8}>
                        1st Finger: <span id="fingeroneName"></span>
                    </Col>
                </Row>
                <Row className="FingerTwo">
                    <Col xs={12} md={4}>
                        <img id="imgFingerTwo" src="img/Finger.png" alt="2nd Finger"/>
                    </Col>
                    <Col xs={12} md={8}>
                        2nd Finger: <span id="fingertwoName"></span>
                    </Col>
                </Row>
                <Row className="TrinkitOne">
                    <Col xs={12} md={4}>
                        <img id="imgTrinkitOne" src="img/Trinkit.png" alt="1st Trinkit"/>
                    </Col>
                    <Col xs={12} md={8}>
                        1st Trinkit: <span id="trinkitoneName"></span>
                    </Col>
                </Row>
                <Row className="TrinkitTwo">
                    <Col xs={12} md={4}>
                        <img id="imgTrinkitTwo" src="img/Trinkit.png" alt="2nd Trinkit"/>
                    </Col>
                    <Col xs={12} md={8}>
                        2nd Trinkit: <span id="trinkittwoName"></span>
                    </Col>
                </Row>
                <Row className="Back">
                    <Col xs={12} md={4}>
                        <img id="imgBack" src="img/Back.png" alt="Back"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Back: <span id="backName"></span>
                    </Col>
                </Row>
                <Row className="MainHand">
                    <Col xs={12} md={4}>
                        <img id="imgMainHand" src="img/MainHand.png" alt="Main-Hand"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Main-Hand: <span id="mainhandName"></span>
                    </Col>
                </Row>
                <Row className="OffHand">
                    <Col xs={12} md={4}>
                        <img id="imgOffHand" src="img/OffHand.png" alt="Off-Hand"/>
                    </Col>
                    <Col xs={12} md={8}>
                        Off-Hand: <span id="offhandName"></span>
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    };
}