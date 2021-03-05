import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {ToastProvider} from "react-toast-notifications";

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <ToastProvider autoDismissTimeout={3000} placement={'bottom-right'} autoDismiss>
                    <App/>
                </ToastProvider>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);
