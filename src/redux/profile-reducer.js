const SET_PERSON = "people/SET_PERSON"


const initialState = {
    profileInfo: {}
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_PERSON): {
            return {...state, profileInfo: action.payload}
        }
        default: {
            return state
        }
    }
}


export const profileActions = {
    setProfile: (profileInfo) => ({type: SET_PERSON, payload: profileInfo})
}
