import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Tugas9 from './Tugas-9/Tugas9.js';
// import Tugas10 from './Tugas-10/Tugas10.js';
// import Tugas11 from './Tugas-11/Tugas11.js';
// import Tugas12 from './Tugas-12/Tugas12';
// import Tugas13 from './Tugas-13/Tugas12Convert';
// import Tugas13 from './Tugas-13/Tugas13';
// import Tugas14 from './Tugas-14/Tugas14';
import Routes from './Tugas-15/Routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Tugas9 />
      <br/>
      <br/>
      <Tugas10 />
      <br/>
      <br/>
      <Tugas11 />
      <br/>
      <br/>
      <Tugas13 />
      <br/>
      <br/>
      <Tugas14 />
      <br/>
      <br/> */}
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;