import React from 'react'

const Config = () => {
     const conf = {
        development: {
            NAMESPACE: 'electron'
        },
        production: {
            NAMESPACE: 'electron'
        }
    }

    return conf[process.env.NODE_ENV]
}

export default Config