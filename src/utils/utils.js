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

export function setItemsToLocalStorage( key = '', values ){
    localStorage.setItem(key, JSON.stringify(values))
}

export function getItemsFromLocalStorage( key = '' ){
    return JSON.parse(localStorage.getItem(key))
}

export function removeItemsFromLocalStorage( ...keys ) {
    for(let i = 0; i < keys.length; i++) {
        localStorage.removeItem(keys[i])
    }
}