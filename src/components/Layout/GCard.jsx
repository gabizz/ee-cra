import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {},
    container: {
        marginLeft: theme.spacing.unit*0.5,
        marginRight: theme.spacing.unit*0.5,
        marginBottom: -theme.spacing.unit,
        marginTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit*0.3,
        paddingRight: theme.spacing.unit*0.3,
        paddingBottom: theme.spacing.unit,
        height: '97%',
        // background: theme.palette.grey[50],
        color: theme.palette.primary.light,
        borderRadius: '10px'
    },
    header: {
        margin: -theme.spacing.unit+4,
        padding: theme.spacing.unit*1.2,
        background: theme.palette.grey[300],
        borderRadius: '10px 10px 0 0',
        color: theme.palette.primary.dark
    },
    body: {
        margin: '8px 10px 10px 10px',
        paddingTop: theme.spacing.unit,
        color: theme.palette.primary.light,
        backgroundColor: "inherit",
        
    }
})

const GCard = (props) => {
    const { classes } = props;

    let headerVisible = props.headerVisible ? props.headerVisible : true

    return (
        <Paper className = { classes.container }  style = {props.cardStyle}>
            { headerVisible !== 'no'
                ? <div className = { classes.header }  id = "react-no-print"> <small>{props.header}</small> </div>
                : null
            }
           
            <div className = { classes.body }  > {props.children}</div>
        </Paper>
    )
}

export default withStyles(styles)(GCard)