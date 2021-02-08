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
        this.firebaseInit()
    }

    firebaseInit(){
        firebase.initializeApp(this.firebaseConfig)
    }
}



