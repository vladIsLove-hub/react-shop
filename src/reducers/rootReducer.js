import initialState from "./state"

const rootReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload
            }

        default:
            return state
    }
}

export default rootReducer