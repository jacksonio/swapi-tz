import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import MainPage from '../components/MainPage'
import LoginPage from '../components/LoginPage'
import { getIsLoggedIn } from '../selectors/loginSelectors'
import ProfilePage from '../components/ProfilePage'

export const useRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)

    if (isLoggedIn) {
        return (
            <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="/profile" render={() => <ProfilePage />} />
                <Redirect to="/" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" render={() => <LoginPage />} />
                <Redirect to="/login" />
            </Switch>
        )
    }
}
