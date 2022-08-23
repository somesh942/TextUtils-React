// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

// import { Switch, Route } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';








function App() {

  const [mode, setMode] = useState('light'); // whether the dark mode is enabled or not 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type


    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }


  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';

      showAlert("Dark Mode has been enabled ", "success");
      document.title = 'TextUtils - Darkmode';

      // This adds a blinking feature to the webpage title
      // setInterval(() => {
      //   document.title='TextUtils Its a amazing mode';

      // }, 2000);

      // setInterval(() => {
      //   document.title='Please Install TextUtils';

      // }, 1500);





    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled ", "success");
      document.title = 'TextUtils - Lightmode';

    }

  }




  return (
    <>
      <Router>
      <Navbar title="TextUtilsSomesh" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />

      <div className="container my-3" >
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode} />
          </Route>
        </Switch>

      </div>
      </Router>
    </>

  );

}

export default App;
