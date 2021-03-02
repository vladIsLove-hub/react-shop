import { authInitialState } from './state'

const authReducer = (state = authInitialState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                hasLogin: action.payload
            }
        case 'SIGN_IN':
            return {
                ...state,
                token: action.idToken
            }
        default:
            return state
    }
}

export default authReducer