import React from 'react';
import DailyQuote from './../src/Container/DailyQuote'
import QuoteList from './../src/Container/QuoteList'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './../src/Components/Header'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Header />
        <Route path="/" component={DailyQuote} />
        <Route path="/QuoteList" component={QuoteList} />
      </BrowserRouter>      
    </div>
  );
}

export default App;
