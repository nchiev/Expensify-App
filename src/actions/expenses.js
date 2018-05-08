import uuid from 'uuid';

import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        
        const expense = { description, note, amount, createdAt };

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const startEditExpense = ( id, updates ) => {
    return (dispatch) => {
        database.ref('expenses').child(id).update(updates).then((ref) => {
            dispatch(
                editExpense(id, updates)
            );
        });
    };
};

export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startDeleteExpense = ( {id} = {} ) => {
    return (dispatch) => {
        database.ref('expenses').child(id).remove().then((ref) => {
            dispatch(
                removeExpense({ id })
            );
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];

                snapshot.forEach(snap => {
                    expenses.push({
                        id: snap.key,
                        ...snap.val()
                    });
                });

                dispatch(setExpenses(expenses));
            })
            .catch((e) => {
                console.log('Error fetching data', e);
        });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});
