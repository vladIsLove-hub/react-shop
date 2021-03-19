import { booksInitialState } from "./state"
import { addBookToState } from '../utils/utils'
import { myFirebase } from "../index"

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
            myFirebase.addBook(newBook, token)
            return {
                ...state,
                books: newBooks
            }
        case 'BOOKS_ERROR': 
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default bookReducer