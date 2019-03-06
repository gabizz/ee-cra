import React from 'react'
import Typography from '@material-ui/core/Typography'

const Caption = (props) => (
    <Typography variant = "caption" color="primary" style={ props.style ? props.style : {textAlign:'center', lineHeight:2.5, wordWrap: 'break-word'} } >
        {props.data}
        
    </Typography>
)

export default Caption