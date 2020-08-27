import React from 'react';
import './App.css';
import Header from './components/elements/Header/Header'
import ListMonths from './components/pages/ListMonths/ListMonths'

function App() {
  return (
    <div className="App">
      <Header />
      <ListMonths/>
    </div>
  );
}

export default App;
