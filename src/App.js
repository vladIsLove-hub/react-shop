import React from 'react';
import Nav from './components/Nav/Nav';
import MainPage from './components/pages/MainPage';
import { Switch, Route } from 'react-router-dom'
import RegistrationPage from "./components/pages/RegistrationPage";

export const App = () => {
    return (
        <>
            <Switch>

                <Route path='/' exact render={() => {
                    return (
                        <>
                            <Nav />
                            <MainPage />
                        </>
                    )
                }} />

                <Route path='/registration' component={RegistrationPage} />

            </Switch>
        </>   
    )
}

export default App