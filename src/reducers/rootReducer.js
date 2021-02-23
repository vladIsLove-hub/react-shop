import initialState from "./state"
import { addBookToState } from '../utils/utils'
import Firebase from "../firebase"

const firebase = new Firebase()

const rootReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload
            }
        case 'BOOKS_ADD':
            const { dataOfBook } = action
            const { newBooks, newBook } = addBookToState(state, dataOfBook)
            firebase.addBook(newBook)
            return {
                ...state,
                books: newBooks
            }

        default:
            return state
    }
}

export default rootReducer