import React, { useContext } from 'react';
import { Card, CardHeader, Typography, CardContent, Grid, Divider } from '@material-ui/core';
import useStyles from './mainStyles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../infoCard';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Harmoney" align='center' subheader="Powered by Speechly"/>
            <div style={{ textAlign: "center" }}><strong>⚡Developed by <a href="https:linkedin.com/in/anand-s-63as" target="_blank" rel='noreferrer'>Anand</a>⚡</strong></div>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main