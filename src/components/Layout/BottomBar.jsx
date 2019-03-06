import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme=> {
    // console.log("tema", theme)
    return ({
    root: {},
    stickToBottom: {
        width: '100%',
        height: "30px",
        position: 'fixed',
        marginTop:'calc(100vh - 20px)',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    toolbar: { maxHeight: '20px'}
})
}

class BottomBar extends React.Component {

    state = { dataLoaded: false }

    render() {
        const { classes } = this.props;

        return (
            <AppBar className = {classes.stickToBottom }>
                {/* <Toolbar className = {classes.toolbar}> */}
                    <Typography variant="inherit" color="inherit" style = {{marginTop:'0px', textAlign: 'right', marginRight: '10px'}}>
                       <small> {this.props.children}</small>
                    </Typography>
                {/* </Toolbar> */}
                    
            </AppBar>
        )
    }

}

export default withStyles(styles)(BottomBar);