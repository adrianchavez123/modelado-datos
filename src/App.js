import React from 'react';
import './App.css';
import Header from './layout/Header/Header';
import Content from './layout/Content/Content';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Content/>
    </div>
    </BrowserRouter>
  );
}

export default App;
