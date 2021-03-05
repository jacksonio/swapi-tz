import {peopleApi} from "../api/peopleApi";
import {loaderActions} from "./loader-reducer";

const SET_All_PEOPLE = "people/SET_ALL_PEOPLE"


const initialState = {
    people: []
}


export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_All_PEOPLE): {
            return {...state, people: action.payload}
        }
        default: {
            return state
        }
    }
}


export const peopleActions = {
    setAllPeople: (people) => ({type: SET_All_PEOPLE, payload: people})
}


export const getAllPeopleThunk = () => dispatch => {
    loaderActions.startLoading()
    peopleApi.getAllPeople().then((data) => {
        dispatch(peopleActions.setAllPeople(data))
        loaderActions.stopLoading()
    })
}
