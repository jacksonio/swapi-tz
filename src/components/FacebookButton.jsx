import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'

import { loginActions } from '../redux/login-reducer'
import { getIsAuthorization } from '../selectors/loginSelectors'

const FacebookButton = () => {
    const dispatch = useDispatch()
    const isAuthorization = useSelector(getIsAuthorization)

    const componentClicked = () => {
        dispatch(loginActions.setLoginStart())
    }

    const responseFacebook = (response) => {
        if (response.status !== 'unknown') {
            dispatch(loginActions.setLoginSuccessful())
            localStorage.setItem('isLoggedIn', 'true')
        } else {
            dispatch(loginActions.setLoginFailed())
        }
    }

    return (
        <div>
            <FacebookLogin
                appId="2507108576250694"
                fields="name,email,picture"
                isDisabled={isAuthorization}
                textButton={isAuthorization ? 'Loading' : 'Login with Facebook'}
                onClick={componentClicked}
                callback={responseFacebook}
            />
        </div>
    )
}

export default FacebookButton
