import { combineReducers } from "redux";
import authReducer from './authReducer'
import bookReducer from './bookReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    bookState: bookReducer
})

export default rootReducer