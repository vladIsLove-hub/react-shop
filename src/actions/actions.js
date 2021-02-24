const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

export const booksAdded = (dataOfBook) => {
    return {
        type: 'BOOKS_ADD',
        dataOfBook
    }
}   

export const requestBooks = (dispatch, myFirebase) => () => {
    myFirebase.getBooks()
        .then(data => dispatch(booksLoaded(data)))
}

export const signUp = (value) => {
    return {
        type: 'SIGN_UP',
        payload: value
    }
}