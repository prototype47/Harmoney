import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Slide, Avatar } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './listStyles';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {

    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
    // console.log(globalState);
    
    // const transactions = [
    //     { id: 1, type: "Income", category: "Salary", amount: 50, date: "Wed Feb 08 2023", time: new Date().toLocaleTimeString() },
    //     { id: 2, type: "Expense", category: "Grocery", amount: 500, date: "Wed Feb 08 2023", time: new Date().toLocaleTimeString() },
    //     { id: 3, type: "Income", category: "Petrol", amount: 150, date: "Wed Feb 08 2023", time: new Date().toLocaleTimeString() },
    // ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List