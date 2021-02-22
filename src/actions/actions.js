const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

export const requestBooks = (dispatch, myFirebase) => () => {
    myFirebase.getBooks()
        .then(data => dispatch(booksLoaded(data)))
}