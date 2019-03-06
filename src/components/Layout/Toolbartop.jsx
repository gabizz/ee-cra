import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Config from '../../Config';
import { GoPerson } from 'react-icons/go';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden'
import {  FaPowerOff } from 'react-icons/fa'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import ls from '../../utils/ls';

const config = Config()

// userData = userData.name ? userData: {name: 'undefined'}

const styles = theme => {
    // console.log("TEMA:", theme)
    return ({
        root: {
            flexGrow: 1,
        },
        grow: {
            flexGrow: 1,

        },
        toolbar: {
            background: '#1b276b'
        },
        link: {
            textDecoration: 'none',
            color: 'white'
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
            color: theme.palette.common.white,
        },
        lgMenuButton: {
            width: 200,
            marginLeft: '5px',
            color: 'white',
            border: '1px solid white',
            borderRadius: '0px',
            "&:hover": {
                background: 'white',
                color: "navy"
            },
            "&:active": {
                color: 'red',
                borderShadow: '2px 2px 5px red'
            }
        },
        menuItem: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                // '& $icon': {
                //     color: theme.palette.common.white,
                // },
            }
        },
        paper: {
            margin: theme.spacing.unit,
            padding: theme.spacing.unit
        },
        cell: {
            border: '1px dotted lightgrey',
            padding: theme.spacing.unit,
            margin: '-1px'
        },
        dialog: { height: 'auto', width: '100%' },
    }
    )
}

class Toolbartop extends React.Component {

    state = {
        anchorEl: null,
        menu: [
            { name: 'HOME', url: '/login', allowed: ["user", "contabil", "expert", "admin", "app"], active: false },
            // will redirect home to login in order to choose the homepage based on role
            { name: 'REFERATE PROPRII', url: '/referate/all', allowed: ["user", "contabil", "expert", "admin", "app"], active: false },
            { name: 'LISTE ȘI RAPOARTE', url: '/liste/all', allowed: ["app", "admin", "expert"], active: false },

        ],
        userData: null,
        userModalHandler: false
    }

    componentWillMount() {
        let userData = window.localStorage.getItem(config.NAMESPACE)
        userData = userData ? JSON.parse(localStorage.getItem(config.NAMESPACE)) : null
        this.setState({ userData: userData })

    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = name => value => {
        this.setState({ anchorEl: null });
        this.props.history.push(name);

    };

    logoutHandler = () => {
        // this.props.history.push('/login')
        let lsItemName = config.NAMESPACE;
        console.log("lsItemNAme:", lsItemName)
        localStorage.removeItem(lsItemName)

        window.location.replace('/login')

    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (

            <div className={classes.root} id="react-no-print">
                <AppBar position="fixed" className={classes.toolbar} >
                    <Toolbar>
                        <Grid container justify="space-between" alignItems="center">
                            <div className={classes.grow}>
                                <Hidden only={['lg', 'md', 'sm']}>
                                    <Button
                                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleClick}
                                    >
                                        <MenuIcon className={classes.menuButton} />
                                    </Button>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleClose('')}
                                    >
                                        {this.state.menu.map((e, i) => (
                                            <span key={`menuitemmobile-${i}`}>
                                                <MenuItem onClick={this.handleClose(e.url)}> &nbsp; {e.name}</MenuItem>
                                            </span>
                                        ))}

                                    </Menu>
                                </Hidden>

                                <Hidden only="xs">
                                    {/* {config.APP_NAME} */}
                                    {this.state.userData 
                                        ? (
                                            <span>
                                                {this.state.menu.map((e, i) => (
                                                    <span key={`menu-button-desktop-${i}`}>
                                                    { e.allowed.includes(this.state.userData.role) ? (
                                                        <Button
                                                        
                                                        className={classes.lgMenuButton}
                                                        variant="text"
                                                        color="primary"
                                                        onClick={this.handleClose(e.url)}>

                                                        &nbsp; {e.name} 
                                                    </Button>
                                                    ): null }
                                                    </span>
                                                ))}                                                
                                            </span>
                                        )
                                        : null
                                    }

                                    &nbsp;
                            </Hidden>

                            </div>
                            <div>
                                <Button variant="text" color="inherit" onClick={() => this.setState({ userModalHandler: true })}>
                                    <GoPerson /> &nbsp; {this.state.userData ? this.state.userData.name : null}
                                </Button>

                                {/* <Button color="inherit"><AddIcon /></Button> */}
                                <Button color="inherit" onClick={this.logoutHandler}> <FaPowerOff /> </Button>
                            </div>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Dialog
                    className={classes.dialog}
                    maxWidth="md"

                    open={this.state.userModalHandler}
                    onClose={() => this.setState({ userModalHandler: false })}
                >
                    {/* <DialogTitle >
                        {this.state.userData ? this.state.userData.name : null}
                    </DialogTitle> */}
                    <DialogContent style={{ width: '900px' }}>
                            {this.state.userData 
                           ? (
                        <div>
                        <Paper className={classes.paper}>

                            <strong>Numele Dvs:</strong> {this.state.userData.name}
                        </Paper>
                        <Paper className={classes.paper}>
                            <strong>Nume utilizator:</strong> {this.state.userData.username}
                        </Paper>
                        <hr />
                        <br />
                        {/* <Paper className = {classes.paper}> */}
                        <h3 className={classes.paper}>ABONAMENTELE DVS.</h3>
                        {/* </Paper> */}
                        <Grid container justify="space-evenly" alignItems="center">

                            <Grid item xs={4}><div className={classes.cell}><strong>ROL</strong></div></Grid>
                            <Grid item xs={4}><div className={classes.cell}><strong>EXIPIRARE</strong></div></Grid>
                        </Grid>
                        {this.state.userData.apps.map((e, i) => (
                            <Grid container justify="space-evenly" alignItems="center" key={`app-${i}`}>
                                <Grid item xs={4}><Paper className={classes.cell}>{e.name}</Paper></Grid>
                                <Grid item xs={4}><Paper className={classes.cell}>{e.role}</Paper></Grid>
                                <Grid item xs={4}><Paper className={classes.cell}>{moment(e.expiry).format('DD.MM.YYYY')}</Paper></Grid>
                            </Grid>
                        ))}
                        </div>
                           ): null }
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Toolbartop));