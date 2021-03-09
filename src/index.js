import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'

import App from './App'
import store from './redux/redux-store'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ToastProvider autoDismissTimeout={3000} placement={'bottom-right'} autoDismiss>
                <App />
            </ToastProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
