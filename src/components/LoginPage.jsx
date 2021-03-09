import React from 'react'
import { styled } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FacebookButton from './FacebookButton'

const LoginContainer = styled('div')({
    marginTop: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
})

const useStyles = makeStyles(() => ({
    title: {
        textAlign: 'center',
        width: '100%',
    },
}))

const LoginPage = () => {
    const classes = useStyles()

    return (
        <LoginContainer>
            <h2 className={classes.title}>Регистрация с помощью Facebook</h2>
            <FacebookButton />
        </LoginContainer>
    )
}

export default LoginPage
