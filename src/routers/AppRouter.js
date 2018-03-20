// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

// Application imports 
// Modules
import Header from '../components/Header';
import ExpenseHome from '../components/ExpenseHome';
import ExpenseAdd from '../components/ExpenseAdd';
import ExpenseEdit from '../components/ExpenseEdit';
import ExpenseHelp from '../components/ExpenseHelp';
import NotFound from '../components/NotFound';

const ExpsenifyRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseHome} />
                <Route path="/add" component={ExpenseAdd} />
                <Route path="/edit/:id" component={ExpenseEdit}/>
                <Route path="/help" component={ExpenseHelp} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default ExpsenifyRouter;