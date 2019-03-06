import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const styles = theme => {
    return ({
        root: {
            flexGrow: 1,
        },

    })
}

const CustomToolbar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position = {props.position ? props.position : 'static'} color = {props.color} style = {props.style ? props.style : {}}>
                <Toolbar >
                    <Grid container direction = "row" justify = "space-between" alignItems = "center">
                        {props.children} 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
)}

export default withStyles(styles)(CustomToolbar);