import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPeopleThunk, peopleActions} from "./redux/people-reducer";
import {Navbar} from "./components/Navbar";
import {useRoutes} from "./hooks/routes";
import {useHistory} from "react-router-dom";
import {loginActions} from "./redux/login-reducer";
import {getIsLoggedIn} from "./selectors/loginSelectors";

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

    useEffect(() => {
        const storedPeople = localStorage.getItem('allPeopleData')
        if (storedPeople) {
            const allPeopleArr = JSON.parse(localStorage.getItem('allPeopleData'))
            dispatch(peopleActions.setAllPeople(allPeopleArr))
        } else {
            dispatch(getAllPeopleThunk())
        }
    }, [dispatch])

    const routes = useRoutes()

    return (
        <div className='App'>
            {isLoggedIn ? <Navbar/> : null}
            {routes}
        </div>
    );
}

export default App;
