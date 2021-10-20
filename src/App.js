import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Productos from './Components/Productos';
import Listado from './Components/Listado';

function App(){
  return (
    <div className="App">
        <Header/>
        <Productos/>
        <Listado/>        
    </div>
  );
}

export default App;
