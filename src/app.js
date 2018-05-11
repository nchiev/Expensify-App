// Imports from modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Application imports 
// Css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Modules
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses'

import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('Logged in');
    }
    else {
        console.log('Logged out');
    }
});