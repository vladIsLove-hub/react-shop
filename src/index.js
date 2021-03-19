import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' 
import {BrowserRouter as Router} from 'react-router-dom'
import { FirebaseProvider } from "./firebase-context/firebase-context";
import store from './store'
import Firebase from "./firebase";

export const myFirebase = new Firebase()
myFirebase.__init__()

ReactDOM.render(
  <Provider store={store}>
      <FirebaseProvider value={myFirebase}>
          <Router>
              <App />
          </Router>
      </FirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

