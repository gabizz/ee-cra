import React from 'react'
import { withStyles } from '@material-ui/core'
import Toolbartop from './components/Layout/Toolbartop'
import MainContent from './components/Layout/MainContent'

const styles = theme => ({
    root: { flexGrow: 1},
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit
    }
})

const Main = (props) => {
    const { classes } = props
    return (
        <div className = {classes.root}>
            <Toolbartop>
                
            </Toolbartop>
            <MainContent></MainContent>

        </div>
)}

export default withStyles(styles)(Main)