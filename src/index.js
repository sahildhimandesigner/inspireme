import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Authors from './containers/Authors'
import AuthorsDetails from './containers/AuthorsDetails';
import QuoteContainer from './containers/QuoteContiner';
import { Menu } from "./components/Menu";



ReactDOM.render(
    <BrowserRouter>
    <Menu />
        <Switch>
            <Route path="/quotes" component={QuoteContainer} />
            <Route exact path="/authors" component={Authors} />
            <Route path="/authors/:id" component={AuthorsDetails} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
