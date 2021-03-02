import { booksInitialState } from "./state"
import { addBookToState } from '../utils/utils'
import Firebase from "../firebase"

const firebase = new Firebase()

const bookReducer = ( state = booksInitialState, action ) => {
    switch(action.type){
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload
            }
        case 'BOOKS_ADD':
            const { dataOfBook, token } = action
            const { newBooks, newBook } = addBookToState(state, dataOfBook)
            firebase.addBook(newBook, token)
            return {
                ...state,
                books: newBooks
            }

        default:
            return state
    }
}

export default bookReducer