import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {
    const handleDeleteExpense = (id ,dispatch) => {
        dispatch(removeExpense({ id }));
    };

    return (
        <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={ (e) => 
            handleDeleteExpense(id,dispatch) 
        }>Remove</button>
    </div>
    );
};

export default connect()(ExpenseListItem);;