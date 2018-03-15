// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

// Application imports 
// Css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Modules
import ExpsenifyRouter from './routers/AppRouter';

ReactDOM.render(<ExpsenifyRouter />, document.getElementById('app'));
