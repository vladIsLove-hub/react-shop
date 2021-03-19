import { authInitialState } from './state'

const authReducer = (state = authInitialState, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                token: action.idToken,
                email: action.email
            }
        case 'SIGN_IN_ERROR': 
            return {
                ...state,
                error: action.error
            }
        case 'SIGN_OUT':
            return {
                ...state,
                token: null,
                email: null
            }
        case 'UPDATE_TOKEN':
            return {
                ...state,
                token: action.newToken
            }
        default:
            return state
    }
}

export default authReducer