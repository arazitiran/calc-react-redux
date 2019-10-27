import React from 'react';
import { Paper, Container, Typography, Grid, ButtonGroup, Hidden, makeStyles, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import CalculatorBtn from './CalculatorBtn'
import { useSelector } from 'react-redux'

//const action = (type, btnval) => store.dispatch({ type: type, payload: { btnval: btnval } })

let Calculator = (props) => {

  let input = useSelector(state => state.inputHistory);
  let result = useSelector(state => state.result);



  const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      background: theme.palette.primary.light
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    calcButton: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        minHeight: '80px'
      },
      fontSize: '20px',
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)'
    },
    gridButtons: {
      //padding: theme.spacing(5),
    },
    inputContainer: {
      background: theme.palette.background.paper,
      width: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing(2),
      position: 'relative'
    },
    paper: {
      background: 'linear-gradient(60deg, #66bb6a, #43a047)',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      paddingTop: theme.spacing(3) * 4.3,
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(5) * 2,
        marginBottom: theme.spacing(5) * 2,
      },
    },
  }));
  const classes = useStyles();


  let calculatorComponents = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '=', 'C', '+/-', '%'];
  let items;
  // Wrapping values in buttons 
  items = calculatorComponents.map(val => {
    return <CalculatorBtn classes={classes.calcButton} btnValue={val}  ></CalculatorBtn>
  });

  return (

    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Calculator with redux
              </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper} >
          <Container className={classes.inputContainer}>
            <Typography variant="h3" noWrap="true" style={{ width: '100%', height: '100%', marginTop: '35px' }} >
              {result}
            </Typography>
            <Typography variant="h6" noWrap="true" style={{ color: '#a3a3a3', borderBottom: '1px solid #e1e1e1', margin: '15px', left: '0', top: '0', position: 'absolute' }} >
              {input}
            </Typography>
          </Container>
          <Grid container className={classes.gridButtons} spacing={0}>
            <Grid item xs={12}>
              <ButtonGroup
                style={{ width: '100%' }}>
                {items.slice(16, 19)} {items.slice(14, 15)}
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                style={{ width: '100%' }}>
                {items.slice(7, 10)}{items.slice(13, 14)}
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup style={{ width: '100%' }}>
                {items.slice(4, 7)}{items.slice(12, 13)}
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup style={{ width: '100%' }}>
                {items.slice(1, 4)}{items.slice(11, 12)}
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
            <ButtonGroup style={{ width: '100%' }}>
                  {items.slice(0, 1)}
                   {items.slice(10, 11)}
                    {items.slice(15, 16)}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Calculator;