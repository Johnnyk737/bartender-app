import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderRoutes } from "react-router-config";

import { Main } from "./components/Main";
import DrinkList from './components/drinklist/DrinkList'
import FindDrink from './components/finddrink/FindDrink'
import { DrinkPage } from './components/drinkpage/DrinkPage'
import ErrorPage from './components/ErrorPage'
import routes from './routes'
// import 'bootstrap/dist/css/bootstrap.min.css';

let app = document.getElementById("app");

ReactDOM.render(
  <div>
    <BrowserRouter>
      {/* {renderRoutes(routes)} */}
      <Switch>
        {/* {renderRoutes(routes)} */}
        <Route exact path='/' component={Main} />
        <Route path='/drinklist' component={DrinkList} />
        <Route path='/findyourdrink' component={FindDrink} />
        <Route exact path='/drink/:id' component={DrinkPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  </div>
  , app
);  

//TODO: connect DB
//TODO: Allow browser back button to work
//TODO: fix routing
