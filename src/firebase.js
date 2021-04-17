import axios from "axios";
import firebase from "firebase";
import 'firebase/database';
import { setItemsToLocalStorage } from "./utils/utils";

export default class Firebase {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyCqwsZhsxqjkAvNmaucDaiNlvn8pkqqlCo",
            authDomain: "react-shop-books.firebaseapp.com",
            projectId: "react-shop-books",
            storageBucket: "react-shop-books.appspot.com",
            messagingSenderId: "487617567114",
            appId: "1:487617567114:web:b328f516842e95f6bb9073",
            databaseURL: "https://react-shop-books-default-rtdb.firebaseio.com",
        }
        this.baseURL = `${this.firebaseConfig.databaseURL}/books.json`
    }

    __init__() {
        firebase.initializeApp(this.firebaseConfig)
    }

    getBooks = async () => {
        return await axios.get(this.baseURL)
                            .then(response => {
                                const books = response.data
                                if(Array.isArray(books)){
                                    return books
                                } else {
                                    return Object.values(books)
                                }
                            })
    }

    addBook = async (book, token) => {
        await axios.post(`${this.baseURL}?auth=${token}`,
            book,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
        })
    }

    updateToken = async ( refreshTokenPrev, updateTokenAction ) => {
        if(refreshTokenPrev) {
            return await axios.post(`https://securetoken.googleapis.com/v1/token?key=${this.firebaseConfig.apiKey}`,
                `grant_type=refresh_token&refresh_token=${refreshTokenPrev}`,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
                .then(async response => {
                    if(response.status === 200) {
                        const { id_token, refresh_token } = response.data
                        updateTokenAction(id_token, refresh_token)
                        setItemsToLocalStorage('token', id_token)
                        setItemsToLocalStorage('refreshToken', refresh_token)
                    }
                })
        }
    }

    createAccount = async (email, password, signInAction, signInErrorAction, history) => {
        return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseConfig.apiKey}`,
            {
                email, password,
                returnSecureToken: true //Always be TRUE
            },
            {
                headers:  {
                    'Content-Type': 'application/json'
                }
            })
            .then( async resp => {
                if(resp.status === 200) {
                    const { idToken, email } = resp.data
                    await signInAction(idToken, email)
                    await setItemsToLocalStorage('token', idToken)
                    await setItemsToLocalStorage('email', email)
                    await signInErrorAction(null)
                    await history.push('/')
                }
            })
            .catch(error => {
                const errMessage = error.response.data.error.message
                if(errMessage === 'EMAIL_EXISTS') {
                    signInErrorAction('Данный e-mail уже существует')
                } else if(errMessage === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
                    signInErrorAction('Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.')
                }
            })
    }

    loginIn = async (email, password, signInAction, signInErrorAction, history) => {
        return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseConfig.apiKey}`,
        {
            email, password,
            returnSecureToken: true //Always be TRUE
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async resp => {
                if(resp.status === 200) {
                    const { idToken, email, refreshToken, expiresIn } = resp.data
                    await signInAction(idToken, email, refreshToken, expiresIn)
                    await setItemsToLocalStorage('token', idToken)
                    await setItemsToLocalStorage('refreshToken', refreshToken)
                    await setItemsToLocalStorage('expiresIn', expiresIn)
                    await setItemsToLocalStorage('email', email)
                    await signInErrorAction(null)
                    await history.push('/')
                }
            })
            .catch(error => {
                const errMessage = error.response.data.error.message
                if(errMessage === 'EMAIL_NOT_FOUND') {
                    signInErrorAction('Данного пользователя не существует')
                } else if(errMessage === 'INVALID_PASSWORD') {
                    signInErrorAction('Неверный пароль, попробуйте еще раз')
                } 
            })     
    }
}

