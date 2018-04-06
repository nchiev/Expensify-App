import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <div>
            <h1>Description</h1>
            <p>{description}</p>
        </div>
        <div>
            <h1>Amount</h1>
            <p>{amount}</p>
        </div>
        <div>
            <h1>Create Date</h1>
            <p>{createdAt}</p>
        </div>
    </div>
);

export default ExpenseListItem;