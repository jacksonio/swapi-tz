import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}))

const Loader = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Loader
