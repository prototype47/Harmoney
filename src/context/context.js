import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

// if transactions are stored them it will parse them and use them as initial state otherwise it will use the default value
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":21,"category":"House","type":"Expense","date":"2023-02-14","id":"431f8d3e-918d-439e-af32-1ae5187c9aa6"},{"amount":80,"category":"Travel","type":"Expense","date":"2023-02-12","id":"eeb52daf-7443-44b5-b6d2-8d90ac8cf8e4"},{"amount":900,"category":"Investments","type":"Income","date":"2023-02-12","id":"d3812136-0acd-4c1d-8000-5939dc8c5810"},{"amount":101,"category":"Salary","type":"Income","date":"2023-02-13","id":"e27a2e71-4d92-4ee8-84a8-8ecb55a9a263"}];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id }); }
    const addTransaction = (transaction) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction }); }
    // console.log(transactions);
    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0)

    return(
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
};