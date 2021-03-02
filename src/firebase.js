import axios from "axios";
import firebase from "firebase";
import 'firebase/database';

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

    __init__(){
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

    createAccount = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error))
    }

    loginIn = (email, password) => {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseConfig.apiKey}`,
        {
            email, password,
            returnSecureToken: true //Always be TRUE
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.data)
            .then(data => data.idToken)
    }

    sendSignInLinkToEmail = (email) => {
        firebase.auth().sendSignInLinkToEmail(email, this.actionCodeSettings)
            .then(() => console.log('Письмо отправлено'))
    }
}

