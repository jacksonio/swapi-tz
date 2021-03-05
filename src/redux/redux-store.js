import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {loaderReducer} from "./loader-reducer";
import {peopleReducer} from "./people-reducer";
import {loginReducer} from "./login-reducer";


const reducers = combineReducers({
    loaderReducer,
    peopleReducer,
    loginReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

