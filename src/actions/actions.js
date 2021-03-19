const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

export const booksAdded = (dataOfBook, token) => {
    return {
        type: 'BOOKS_ADD',
        dataOfBook,
        token
    }
}   

export const requestBooks = (dispatch, myFirebase) => () => {
    myFirebase.getBooks()
        .then(data => dispatch(booksLoaded(data)))
}

export const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        error
    }
}
