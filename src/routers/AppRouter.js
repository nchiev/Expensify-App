// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch, NavLink } from "react-router-dom";
import creatHistory from 'history/createBrowserHistory';
// Application imports 
// Modules
import ExpenseHome from '../components/ExpenseHome';
import ExpenseAdd from '../components/ExpenseAdd';
import ExpenseEdit from '../components/ExpenseEdit';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = creatHistory();

const ExpsenifyRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PrivateRoute path="/add" component={ExpenseAdd} />
                <PrivateRoute path="/edit/:id" component={ExpenseEdit}/>
                <PrivateRoute path="/dashboard" component={ExpenseHome} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default ExpsenifyRouter;