// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';

// Application imports 
// Css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Modules
import ExpsenifyRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();
console.log(store.getState());


ReactDOM.render(<ExpsenifyRouter />, document.getElementById('app'));
