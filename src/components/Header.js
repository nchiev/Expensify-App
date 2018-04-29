import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/add">Add</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </div>
);

export default Header;