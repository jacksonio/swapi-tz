import { peopleApi } from '../api/peopleApi'

import { loaderActions } from './loader-reducer'

const SET_All_PEOPLE = 'people/SET_ALL_PEOPLE'
const SET_LIKE = 'people/SET_LIKE'
const CLEAR_ALL_PEOPLE = 'people/CLEAR_ALL_PEOPLE'
const FILTER_BY_LIKES = 'people/FILTER_BY_LIKES'
const FILTER_BY_ALL = 'people/FILTER_BY_ALL'

const initialState = {
    people: [],
    likedPeople: [],
    isFilteredByLikes: false,
}

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_All_PEOPLE: {
            return { ...state, people: action.payload }
        }
        case CLEAR_ALL_PEOPLE: {
            return { ...state, people: [] }
        }
        case SET_LIKE: {
            return {
                ...state,
                people: state.people.map((person) =>
                    person.name === action.payload
                        ? { ...person, isLiked: !person.isLiked }
                        : person
                ),
            }
        }
        case FILTER_BY_LIKES: {
            return {
                ...state,
                isFilteredByLikes: true,
                likedPeople: state.people.filter((person) => person.isLiked),
            }
        }
        case FILTER_BY_ALL: {
            return {
                ...state,
                isFilteredByLikes: false,
                likedPeople: [],
            }
        }
        default: {
            return state
        }
    }
}

export const peopleActions = {
    setAllPeople: (people) => ({ type: SET_All_PEOPLE, payload: people }),
    clearAllPeople: () => ({ type: CLEAR_ALL_PEOPLE }),
    setLike: (personName) => ({ type: SET_LIKE, payload: personName }),
    filterByLikes: () => ({ type: FILTER_BY_LIKES }),
    filterByAll: () => ({ type: FILTER_BY_ALL }),
}

export const getAllPeopleThunk = () => (dispatch) => {
    dispatch(loaderActions.startLoading())
    peopleApi.getAllPeople().then((peopleData) => {
        peopleApi.getAllPlanets().then((planets) => {
            peopleApi.getAllFilms().then((filmsData) => {
                peopleApi.getAllVehicles().then(async (vehiclesData) => {
                    const editedPeopleData = peopleData.map((person) => ({
                        ...person,
                        homeworld: planets[person.homeworld],
                        isLiked: false,
                        photo: null,
                        films: person.films
                            ? person.films.map((filmUrl) => filmsData[filmUrl])
                            : [],
                        vehicles: person.vehicles
                            ? person.vehicles.map((vehicleUrl) => vehiclesData[vehicleUrl])
                            : [],
                    }))
                    await dispatch(peopleActions.setAllPeople(editedPeopleData))
                    localStorage.setItem('allPeopleData', JSON.stringify(editedPeopleData))
                    dispatch(loaderActions.stopLoading())
                })
            })
        })
    })
}

export const setLikeThunk = (personName) => (dispatch, getState) => {
    dispatch(peopleActions.setLike(personName))
    const editedPeopleData = getState().peopleReducer.people
    localStorage.setItem('allPeopleData', JSON.stringify(editedPeopleData))
}
