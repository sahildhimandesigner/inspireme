import React from 'react';
import DailyQuote from './Container/DailyQuote'
import QuoteList from './Container/QuoteList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import AuthourList from './Container/AuthourList';
import AuthourDetail from './Container/AuthorDetail';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Header />        
        <Switch>
          <Route path="/author/:id" component={AuthourDetail} />
          <Route path="/QuoteList" component={QuoteList} />
          <Route path="/Author" component={AuthourList} />          
          <Route path="/" component={DailyQuote} />
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
