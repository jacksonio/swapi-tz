import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab'
import { makeStyles, styled } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import { loginActions } from '../redux/login-reducer'
import { peopleActions } from '../redux/people-reducer'

import FacebookButton from './FacebookButton'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    navigationItem: {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
    },
}))

function ScrollTop(props) {
    const { children, window } = props
    const classes = useStyles()
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    )
}

export function Navbar(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { addToast } = useToasts()

    const FacebookButtonContainer = styled('div')({
        display: 'none',
    })
    const logoutHandler = (e) => {
        e.preventDefault()
        try {
            if (window.FB) {
                window.FB.logout()
                localStorage.removeItem('isLoggedIn')
                localStorage.removeItem('allPeopleData')
                dispatch(loginActions.setLogout())
                dispatch(peopleActions.clearAllPeople())
            } else {
                addToast('Something wrong with Facebook API', { appearance: 'error' })
            }
        } catch (e) {
            addToast(e.message, { appearance: 'error' })
        }
    }
    return (
        <React.Fragment>
            <FacebookButtonContainer>
                <FacebookButton />
            </FacebookButtonContainer>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <div className={classes.navbar}>
                        <div className="navbar-logo">
                            <Typography variant="h6">Swapi App</Typography>
                        </div>
                        <div className="navbar-navigation">
                            <NavLink to={'/'} className={classes.navigationItem}>
                                Main page
                            </NavLink>
                            <a
                                href={'/'}
                                className={classes.navigationItem}
                                onClick={(e) => logoutHandler(e)}
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}
