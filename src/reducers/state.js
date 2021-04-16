import { getItemsFromLocalStorage } from "../utils/utils"

export const booksInitialState = {
    books: [],
    error: false
}

export const authInitialState = {
    token: getItemsFromLocalStorage('token') || null,
    error: null,
    email: getItemsFromLocalStorage('email') || null,
    refreshToken: getItemsFromLocalStorage('refreshToken') || null,
    expiresIn: getItemsFromLocalStorage('expiresIn') || null
}
