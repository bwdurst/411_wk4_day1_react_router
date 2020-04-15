import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '500',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    chip: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    paper: {
        width: '500px',
        height: '300px',
        padding: '40px',
    }
}));

const Car = (props) => {
    const classes = useStyles();

    const carId = props.match.params.id
    const thisCar = cars[carId]
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', width: '500' }} />
                <Paper className={classes.paper}>
                    <h2>{thisCar.Name}</h2>
                    {Object.keys(thisCar).map(key => {
                        return <Chip label={`${key}: ${thisCar[key]}`} />
                    })}
                </Paper>
            </Container>
        </div >
    );
}

export default Car