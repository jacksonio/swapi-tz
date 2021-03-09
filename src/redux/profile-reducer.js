import { peopleActions } from './people-reducer'

const SET_PERSON = 'profile/SET_PERSON'
const SET_PICTURE = 'profile/SET_PICTURE'

const initialState = {
    profileInfo: {},
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON: {
            return { ...state, profileInfo: action.payload }
        }
        case SET_PICTURE: {
            return { ...state, profileInfo: { ...state.profileInfo, photo: action.payload } }
        }
        default: {
            return state
        }
    }
}

export const profileActions = {
    setProfile: (profileInfo) => ({ type: SET_PERSON, payload: profileInfo }),
    setProfilePicture: (pictureUrl) => ({ type: SET_PICTURE, payload: pictureUrl }),
}

export const setProfileThunk = (pictureUrl, name) => (dispatch, getState) => {
    let people = getState().peopleReducer.people
    dispatch(profileActions.setProfilePicture(pictureUrl))
    people = people.map((person) => {
        if (person.name === name) {
            person.photo = pictureUrl
        }
        return person
    })
    dispatch(peopleActions.setAllPeople(people))
    localStorage.setItem('allPeopleData', JSON.stringify(people))
}
