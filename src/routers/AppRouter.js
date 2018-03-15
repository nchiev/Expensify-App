// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

// Application imports 
// Modules
import ExpenseHome from '../components/ExpenseHome';


const Edit = () => (
    <div>
        Edit
    </div>
);

const Help = () => (
    <div>
        Help 
    </div>
);

const Error = () => (
    <div>
        404! - <Link to="/">Home</Link>
    </div>
);

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </div>
);

const ExpsenifyRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseHome} />
                <Route path="/edit" component={Edit} />
                <Route path="/help" component={Help} />
                <Route component={Error} />
            </Switch>
        </div>
    </Router>
);

export default ExpsenifyRouter;