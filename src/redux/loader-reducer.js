const START_LOADING = 'loader/START_LOADING'
const STOP_LOADING = 'loader/STOP_LOADING'

const initialState = {
    loading: false,
}

export const loaderReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case START_LOADING: {
            return { ...state, loading: true }
        }
        case STOP_LOADING: {
            return { ...state, loading: false }
        }
        default: {
            return state
        }
    }
}

export const loaderActions = {
    startLoading: () => ({ type: START_LOADING }),
    stopLoading: () => ({ type: STOP_LOADING }),
}
