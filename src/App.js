import React from 'react';
import Nav from './components/Nav/Nav';
import MainPage from './components/pages/MainPage';
import { Switch, Route } from 'react-router-dom'

export const App = () => {
    return (
        <>
            <Nav />

            <Switch>

                <Route path='/' exact component={MainPage} />

            </Switch>
        </>   
    )
}

export default App