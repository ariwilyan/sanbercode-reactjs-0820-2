import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1>Form Pembelian Buah</h1>
      <div className="container-header-root">
        
        <div className="container-header">
          <div className="container-header-pelanggan">
            Nama Pelanggan
          </div>    
          <input className="container-header-input" type="text" name="name"/>
        </div>
        
        <div className="container-content">
          <div className="container-content-header">
            Daftar Item 
          </div>  
          <div className="container-content-form">
            <input type="checkbox" name="semangka" value="semangka"/>
            <label>Semangka</label><br/>
            <input type="checkbox" name="jeruk" value="jeruk"/>
            <label>Jeruk</label><br/>
            <input type="checkbox" name="nanas" value="nanas"/>
            <label>Nanas</label><br/>
            <input type="checkbox" name="salak" value="salak"/>
            <label>Salak</label><br/>
            <input type="checkbox" name="anggur" value="anggur"/>
            <label>Anggur</label><br/>
          </div>
        </div>
        
        <button className="button">
          <a href="#" className="button-a">Kirim</a>
        </button>

      </div>
    </div>
  );
}

export default App;
