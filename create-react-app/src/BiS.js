import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Title from './Title';
import Footer from './Footer';
import myJson from './json/myJson.json';
import { browserHistory } from 'react-router';


export default class BiS extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    "name": "",
                    "description": "Helmet",
                    "icon": "img/Helm.png"
                },
                {
                    "name": "",
                    "description": "Neck",
                    "icon": "img/Neck.png"
                },
                {
                    "name": "",
                    "description": "Shoulders",
                    "icon": "img/Shoulders.png"
                },
                {
                    "name": "",
                    "description": "Chest",
                    "icon": "img/Chest.png"
                },
                {
                    "name": "",
                    "description": "Waist",
                    "icon": "img/Waist.png"
                },
                {
                    "name": "",
                    "description": "Legs",
                    "icon": "img/Legs.png"
                },
                {
                    "name": "",
                    "description": "Feet",
                    "icon": "img/Feet.png"
                },
                {
                    "name": "",
                    "description": "Wrists",
                    "icon": "img/Wrists.png"
                },
                {
                    "name": "",
                    "description": "Hands",
                    "icon": "img/Hands.png"
                },
                {
                    "name": "",
                    "description": "1st Finger",
                    "icon": "img/Finger.png"
                },
                {
                    "name": "",
                    "description": "2nd Finger",
                    "icon": "img/Finger.png"
                },
                {
                    "name": "",
                    "description": "1st Trinkit",
                    "icon": "img/Trinkit.png"
                },
                {
                    "name": "",
                    "description": "2nd Trinkit",
                    "icon": "img/Trinkit.png"
                },
                {
                    "name": "",
                    "description": "Back",
                    "icon": "img/Back.png"
                },
                {
                    "name": "",
                    "description": "Weapon",
                    "icon": "img/MainHand.png"
                }]
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){

        var myClass = null;
        myClass = localStorage.getItem('myClass');
        var CritWeight = localStorage.getItem('CritWeight');
        var MainStateWeight = localStorage.getItem('MainStateWeight');
        var HasteWeight = localStorage.getItem('HasteWeight');
        var VersWeight = localStorage.getItem('VersWeight');
        var MasteryWeight = localStorage.getItem('MasteryWeight');
        this.getItemInfo(myClass, CritWeight, MainStateWeight, HasteWeight, VersWeight, MasteryWeight);
    }

    getItemInfo = function(myClass, CritWeight, MainStateWeight, HasteWeight, VersWeight, MasteryWeight){
        if (myClass === null){
            alert("Please Put in Your Stat Priorities");
            browserHistory.push('/some/path');
            return;
        }
        myClass = parseInt(myClass);
        var Best = [];
        var subc = 0;

        //This is what type of armor they wear - 1 Cloth - 2 Leather - 3 Mail - 4 Plate
        if (myClass === 1 || myClass === 2 || myClass === 6){
            subc = 4;
        }
        if (myClass === 3 || myClass === 7){
            subc = 3;
        }
        if (myClass === 4 || myClass === 10 || myClass === 11 || myClass === 12){
            subc = 2;
        }
        if (myClass === 5 || myClass === 8 || myClass === 9){
            subc = 1;
        }


        function calculatePriority(myStats){

            var totalPriority = 0;
            for (var i = 0; i < myStats.length; i++){
                if (myStats[i].stat === 3 || myStats[i].stat === 4 || myStats[i].stat === 5 || myStats[i].stat === 71
                    || myStats[i].stat === 72 || myStats[i].stat === 73 || myStats[i].stat === 74){
                    totalPriority += myStats[i].amount * MainStateWeight;
                }
                if (myStats[i].stat === 32){
                    totalPriority += myStats[i].amount * CritWeight;
                }
                if (myStats[i].stat === 36){
                    totalPriority += myStats[i].amount * HasteWeight;
                }
                if (myStats[i].stat === 40){
                    totalPriority += myStats[i].amount * VersWeight;
                }
                if (myStats[i].stat === 49){
                    totalPriority += myStats[i].amount * MasteryWeight;
                }
            }

            return totalPriority;

        }
        function getBiS() {
            for (var j = 1; j < 28; j++) {
                Best[j] = null;
                for (var i = 0; i < myJson.length; i++) {
                    if (myJson[i].inventoryType === j) {

                        if (myJson[i].inventoryType === 1 || myJson[i].inventoryType === 3|| myJson[i].inventoryType === 5
                            || myJson[i].inventoryType === 6 || myJson[i].inventoryType === 7 || myJson[i].inventoryType === 8
                            || myJson[i].inventoryType === 9 || myJson[i].inventoryType === 10) {
                            if (myJson[i].itemSubClass === subc) {
                                var temp = calculatePriority(myJson[i].bonusStats);
                                if (Best[j] === null) {
                                    Best[j] = myJson[i];
                                }
                                else if (temp > calculatePriority(Best[j].bonusStats)) {
                                    Best[j] = myJson[i];
                                }

                            }
                        }
                        else {
                            var temp = calculatePriority(myJson[i].bonusStats);

                            if (myJson[i].inventoryType === 11 || myJson[i].inventoryType === 12){

                                if (Best[j] === null){
                                    Best[j] = [];
                                    Best[j][0] = null;
                                }
                                if (Best[j][0] === null) {
                                    Best[j][0] = myJson[i];
                                }
                                else if (temp > calculatePriority(Best[j][0].bonusStats)) {
                                    Best[j][1] = Best[j][0];
                                    Best[j][0] = myJson[i];
                                }
                            }
                            else if (Best[j] === null) {
                                Best[j] = myJson[i];
                            }
                            else if (temp > calculatePriority(Best[j].bonusStats)) {
                                Best[j] = myJson[i];
                            }
                        }
                    }
                }
            }
            changeThings();
        }
        // Setting all of the Images

        function changeThings() {
            this.setState(state => ({
                items:[{
                        "name": Best[1].name,
                        "description": "Helmet",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[1].icon + ".jpg"
                    },
                    {
                        "name": Best[2].name,
                        "description": "Neck",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[2].icon + ".jpg"
                    },
                    {
                        "name": Best[3].name,
                        "description": "Shoulders",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[3].icon + ".jpg"
                    },
                    {
                        "name": Best[5].name,
                        "description": "Chest",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[5].icon + ".jpg"
                    },
                    {
                        "name": Best[6].name,
                        "description": "Waist",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[6].icon + ".jpg"
                    },
                    {
                        "name": Best[7].name,
                        "description": "Legs",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[7].icon + ".jpg"
                    },
                    {
                        "name": Best[8].name,
                        "description": "Feet",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[8].icon + ".jpg"
                    },
                    {
                        "name": Best[9].name,
                        "description": "Wrists",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[9].icon + ".jpg"
                    },
                    {
                        "name": Best[10].name,
                        "description": "Hands",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[10].icon + ".jpg"
                    },
                    {
                        "name": Best[11][0].name,
                        "description": "1st Finger",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[11][0].icon + ".jpg"
                    },
                    {
                        "name": Best[11][1].name,
                        "description": "2nd Finger",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[11][1].icon + ".jpg"
                    },
                    {
                        "name": Best[12][0].name,
                        "description": "1st Trinkit",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[12][0].icon + ".jpg"
                    },
                    {
                        "name": Best[12][1].name,
                        "description": "2nd Trinkit",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[12][0].icon + ".jpg"
                    },
                    {
                        "name": Best[16].name,
                        "description": "Back",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[16].icon + ".jpg"
                    },
                    {
                        "name": "Your Artifact Weapon Dummy!",
                        "description": "Weapon",
                        "icon": "http://media.blizzard.com/wow/icons/56/" + Best[1].icon + ".jpg"
                    }]
            }));
            /*document.getElementById("imgHelm").src = "http://media.blizzard.com/wow/icons/56/" + Best[1].icon + ".jpg";
             document.getElementById("imgNeck").src = "http://media.blizzard.com/wow/icons/56/" + Best[2].icon + ".jpg";
             document.getElementById("imgShoulders").src = "http://media.blizzard.com/wow/icons/56/" + Best[3].icon + ".jpg";
             document.getElementById("imgChest").src = "http://media.blizzard.com/wow/icons/56/" + Best[5].icon + ".jpg";
             document.getElementById("imgWaist").src = "http://media.blizzard.com/wow/icons/56/" + Best[6].icon + ".jpg";
             document.getElementById("imgLegs").src = "http://media.blizzard.com/wow/icons/56/" + Best[7].icon + ".jpg";
             document.getElementById("imgFeet").src = "http://media.blizzard.com/wow/icons/56/" + Best[8].icon + ".jpg";
             document.getElementById("imgWrists").src = "http://media.blizzard.com/wow/icons/56/" + Best[9].icon + ".jpg";
             document.getElementById("imgHands").src = "http://media.blizzard.com/wow/icons/56/" + Best[10].icon + ".jpg";
             document.getElementById("imgFingerOne").src = "http://media.blizzard.com/wow/icons/56/" + Best[11][0].icon + ".jpg";
             document.getElementById("imgFingerTwo").src = "http://media.blizzard.com/wow/icons/56/" + Best[11][1].icon + ".jpg";
             document.getElementById("imgTrinkitOne").src = "http://media.blizzard.com/wow/icons/56/" + Best[12][0].icon + ".jpg";
             document.getElementById("imgTrinkitTwo").src = "http://media.blizzard.com/wow/icons/56/" + Best[12][1].icon + ".jpg";
             document.getElementById("imgBack").src = "http://media.blizzard.com/wow/icons/56/" + Best[16].icon + ".jpg";
             // Setting all of the Item Names
             document.getElementById("headName").innerHTML = Best[1].name;
             document.getElementById("neckName").innerHTML = Best[2].name;
             document.getElementById("shouldersName").innerHTML = Best[3].name;
             document.getElementById("chestName").innerHTML = Best[5].name;
             document.getElementById("waistName").innerHTML = Best[6].name;
             document.getElementById("legsName").innerHTML = Best[7].name;
             document.getElementById("feetName").innerHTML = Best[8].name;
             document.getElementById("wristsName").innerHTML = Best[9].name;
             document.getElementById("handsName").innerHTML = Best[10].name;
             document.getElementById("fingeroneName").innerHTML = Best[11][0].name;
             document.getElementById("fingertwoName").innerHTML = Best[11][1].name;
             document.getElementById("trinkitoneName").innerHTML = Best[12][0].name;
             document.getElementById("trinkittwoName").innerHTML = Best[12][1].name;
             document.getElementById("backName").innerHTML = Best[16].name;*/

            /*document.getElementById("imgHelm").src = "http://media.blizzard.com/wow/icons/56/" + Best[1].icon + ".jpg";
            document.getElementById("imgNeck").src = "http://media.blizzard.com/wow/icons/56/" + Best[2].icon + ".jpg";
            document.getElementById("imgShoulders").src = "http://media.blizzard.com/wow/icons/56/" + Best[3].icon + ".jpg";
            document.getElementById("imgChest").src = "http://media.blizzard.com/wow/icons/56/" + Best[5].icon + ".jpg";
            document.getElementById("imgWaist").src = "http://media.blizzard.com/wow/icons/56/" + Best[6].icon + ".jpg";
            document.getElementById("imgLegs").src = "http://media.blizzard.com/wow/icons/56/" + Best[7].icon + ".jpg";
            document.getElementById("imgFeet").src = "http://media.blizzard.com/wow/icons/56/" + Best[8].icon + ".jpg";
            document.getElementById("imgWrists").src = "http://media.blizzard.com/wow/icons/56/" + Best[9].icon + ".jpg";
            document.getElementById("imgHands").src = "http://media.blizzard.com/wow/icons/56/" + Best[10].icon + ".jpg";
            document.getElementById("imgFingerOne").src = "http://media.blizzard.com/wow/icons/56/" + Best[11][0].icon + ".jpg";
            document.getElementById("imgFingerTwo").src = "http://media.blizzard.com/wow/icons/56/" + Best[11][1].icon + ".jpg";
            document.getElementById("imgTrinkitOne").src = "http://media.blizzard.com/wow/icons/56/" + Best[12][0].icon + ".jpg";
            document.getElementById("imgTrinkitTwo").src = "http://media.blizzard.com/wow/icons/56/" + Best[12][1].icon + ".jpg";
            document.getElementById("imgBack").src = "http://media.blizzard.com/wow/icons/56/" + Best[16].icon + ".jpg";
            // Setting all of the Item Names
            document.getElementById("headName").innerHTML = Best[1].name;
            document.getElementById("neckName").innerHTML = Best[2].name;
            document.getElementById("shouldersName").innerHTML = Best[3].name;
            document.getElementById("chestName").innerHTML = Best[5].name;
            document.getElementById("waistName").innerHTML = Best[6].name;
            document.getElementById("legsName").innerHTML = Best[7].name;
            document.getElementById("feetName").innerHTML = Best[8].name;
            document.getElementById("wristsName").innerHTML = Best[9].name;
            document.getElementById("handsName").innerHTML = Best[10].name;
            document.getElementById("fingeroneName").innerHTML = Best[11][0].name;
            document.getElementById("fingertwoName").innerHTML = Best[11][1].name;
            document.getElementById("trinkitoneName").innerHTML = Best[12][0].name;
            document.getElementById("trinkittwoName").innerHTML = Best[12][1].name;
            document.getElementById("backName").innerHTML = Best[16].name;*/
        }
        getBiS();
    };



    render() {
        return (
            <div className="BiS">
                <Title></Title>
                <Navbar></Navbar><br/>
                {
                    this.state.items.map((item, index) => (
                        <Row>
                            <Col xs={12} md={4}>
                                <img src={item.icon} alt="Helm"/>
                            </Col>
                            <Col xs={12} md={8}>
                                {item.description}: {item.name}
                            </Col>
                        </Row>
                    ))
                }
                <Footer></Footer>
            </div>

            /*
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
                        Weapon: Your Artifact Weapon DUHHH
                    </Col>
                </Row>
                <Footer></Footer>
            </div>*/
        );
    };
}