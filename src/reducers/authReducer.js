import { authInitialState } from './state'

const authReducer = (state = authInitialState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return {
                hasLogin: action.payload
            }
        default:
            return state
    }
}

export default authReducer