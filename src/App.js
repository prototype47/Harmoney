import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
// import { useSpeechContext, SpeechState } from '@speechly/react-client';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import useStyles from './appStyles';
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-260626498-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {

    const classes = useStyles();
    // const { speechState } = useSpeechContext();
    const main = useRef(null);
    // const executeScroll = () => main.current.scrollIntoView();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    // useEffect(() => {
    //     if(speechState === SpeechState.Recording) {
    //         executeScroll();
    //     }
    // }, [speechState]);

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{height: '100vh'}}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income"/>
                </Grid>
                <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
            </PushToTalkButtonContainer>  
        </div>
    );
}

export default App;