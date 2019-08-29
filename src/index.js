import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DailyQuote from './Container/DailyQuote'
import QuoteList from './Container/QuoteList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import AuthourList from './Container/AuthourList';
import AuthourDetail from './Container/AuthorDetail';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>        
      <Header />        
      <Switch>
        <Route path="/author/:id" component={AuthourDetail} />
        <Route path="/Quotes" component={QuoteList} />
        <Route path="/Author" component={AuthourList} />          
        <Route path="/" component={DailyQuote} />
      </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
