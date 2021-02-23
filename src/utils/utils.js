export const addBookToState = (state, dataOfBook) => {
    const { books } = state
    const { title, author, price, rating, image } = dataOfBook

    const newBook = {
        author,
        id: books.length,
        image,
        price,
        rating,
        title
    }

    return {
        newBooks: [...books, newBook],
        newBook
    }
}