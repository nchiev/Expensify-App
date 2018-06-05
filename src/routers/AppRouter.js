// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch, NavLink } from "react-router-dom";
import creatHistory from 'history/createBrowserHistory';
// Application imports 
// Modules
import Header from '../components/Header';
import ExpenseHome from '../components/ExpenseHome';
import ExpenseAdd from '../components/ExpenseAdd';
import ExpenseEdit from '../components/ExpenseEdit';
import ExpenseHelp from '../components/ExpenseHelp';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = creatHistory();

const ExpsenifyRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/add" component={ExpenseAdd} />
                <PrivateRoute path="/edit/:id" component={ExpenseEdit}/>
                <Route path="/help" component={ExpenseHelp} />
                <PrivateRoute path="/dashboard" component={ExpenseHome} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default ExpsenifyRouter;