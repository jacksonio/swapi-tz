import React from 'react'

import {Redirect, Route, Switch} from 'react-router-dom'
import PersonCard from "../components/PersonCard";
import MainPage from "../components/MainPage";
import LoginPage from "../components/LoginPage";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../selectors/loginSelectors";

export const useRoutes = () => {

    const isLoggedIn = useSelector(getIsLoggedIn)

    if (isLoggedIn) {
        return (
            <Switch>
                <Route path="/" exact render={() => <MainPage/>}/>
                <Route path="/person" render={() => <PersonCard/>}/>
                <Redirect to="/"/>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/login" render={() => <LoginPage/>}/>
                <Redirect to="/login"/>
            </Switch>
        )
    }
}
