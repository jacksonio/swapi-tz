import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { useRoutes } from './hooks/routes'
import { loginActions } from './redux/login-reducer'
import { getIsLoggedIn } from './selectors/loginSelectors'

function App() {
    const history = useHistory()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn) {
            dispatch(loginActions.setLoginSuccessful())
            history.push('/')
        }
    }, [dispatch, history])

    const routes = useRoutes()

    return (
        <div>
            {isLoggedIn ? <Navbar /> : null}
            {routes}
        </div>
    )
}

export default App
