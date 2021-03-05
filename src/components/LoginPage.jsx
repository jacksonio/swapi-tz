import React from "react";
import FacebookButton from "./FacebookButton";
import {styled} from "@material-ui/core";



const LoginContainer = styled("div")({
    marginTop: '20%'
})

const LoginPage = () => {
    return (
        <LoginContainer>
            <h2>Регистрация с помощью Facebook</h2>
            <FacebookButton/>
        </LoginContainer>
    )
}

export default LoginPage

