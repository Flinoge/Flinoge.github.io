import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Title from './Title';
import Footer from './Footer';
import myJson from './json/myJson.json';

export default class BiS extends Component {

    componentDidMount(){
        this.getItemInfo();
    }

    getItemInfo = function(){
        var myClass = 3;
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

        var CritWeight = 8;
        var MainStateWeight = 15;
        var HasteWeight = 9;
        var VersWeight = 5;
        var MasteryWeight = 12;

        function calculatePriority(myStats){

            var totalPriority = 0;
            for (var i = 0; i < myStats.length; i++){
                if (myStats[i].stat === 3 || myStats[i].stat === 4 || myStats[i].stat === 5 || myStats[i].stat === 71 || myStats[i].stat === 72 || myStats[i].stat === 73 || myStats[i].stat === 74){
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
            console.log(Best);
            changeThings();
        }
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
         var $slotType = array('0' => 'None','1' => 'Head','2' => 'Neck','3' => 'Shoulder','4' => 'Shirt','5' => 'Chest',
         '6' => 'Waist','7' => 'Legs','8' => 'Feet', '9' => 'Wrist','10' => 'Hands','11' => 'Finger','12' => 'Trinket',
         '13' => 'One-Hand','14' => 'Shield','15' => 'Ranged','16' => 'Cloak','17' => 'Two-Hand', '18' => 'Bag','19' => 'Tabard',
         '20' => 'Robe','21' => 'Main Hand','22' => 'Off Hand','23' => 'Held In Off-hand','24' => 'Ammo',
         '25' => 'Thrown','26' => 'Ranged Right', '28' => 'Relic');
         */
        // myJson.inventoryType ------ The equipping slot
        // myJson.itemClass -----The Item Slot
        // myJson.icon -------The Icon we get
        // myJson.bonusStats[].stat/amount ------The stats an item has
        // myJson.name  -------Where we get the name
        // http://media.blizzard.com/wow/icons/56/inv_robe_cloth_raidmage_q_01.jpg;  ------Example for Icon
        // Setting all of the Images

        function changeThings() {
            document.getElementById("imgHelm").src = "http://media.blizzard.com/wow/icons/56/" + Best[1].icon + ".jpg";
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
            document.getElementById("backName").innerHTML = Best[16].name;
        }
        getBiS();
    };

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
                        Weapon: Your Artifact Weapon DUHHH
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    };
}