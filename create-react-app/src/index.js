import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from "react-router";

import App from './App';
import BiS from './BiS';
import InputStats from './InputStats';


const app = document.getElementById("root");

ReactDOM.render(
  <Router history={hashHistory}>
	  <Route path="/" component={InputStats}></Route>
	  <Route path="BiS" component={BiS}></Route>
	  <Route path="Contact" component={App}></Route>
  </Router>,
	app
);

