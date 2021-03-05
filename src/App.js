import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPeopleThunk} from "./redux/people-reducer";
import {Navbar} from "./components/Navbar";
import {useRoutes} from "./hooks/routes";
import PersonCard from "./components/PersonCard";
import {useHistory} from "react-router-dom";
import {loginActions} from "./redux/login-reducer";
import {getIsLoggedIn} from "./selectors/loginSelectors";

function App() {
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(getAllPeopleThunk())
    // }, [])

    const history = useHistory()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
        useEffect(() => {
            const isLoggedIn = localStorage.getItem('isLoggedIn')
            if (isLoggedIn) {
                dispatch(loginActions.setLoginSuccessful())
                history.push('/')
            }
        } , [dispatch, history])

    const routes = useRoutes()

    return (
        <div className='App'>
            {isLoggedIn ? <Navbar /> : null}
            {routes}
        </div>
    );
}

export default App;
