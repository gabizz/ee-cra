import React from 'react';
import Grid from '@material-ui/core/Grid';

import BottomBar from '../Layout/BottomBar';

const MainContent = (props) => (
    <div>
    <Grid container direction ="column" className = "main" style = {{ minHeight: 'calc(100vh-70px)', marginTop: '70px'}}>
        <div className = "main-children" > {props.children}</div>
        
    </Grid>
    <div id="react-no-print">
    <BottomBar  > &copy;  2018,  &nbsp;
        <a href ="https://pfa.undevreau.eu" target = "_blank" rel="noopener noreferrer">Maftei Gabriel Claudiu PFA </a> 
        &  <a href ="https://signportal.ro"  target = "_blank" rel="noopener noreferrer">SIGN Portal SRL Arad</a> </BottomBar>
        </div>
    </div>
)

export default MainContent;