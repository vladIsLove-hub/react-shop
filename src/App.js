import React, {useEffect} from 'react';
import Nav from './components/Nav/Nav';
import MainPage from './components/pages/MainPage';
import { Switch, Route } from 'react-router-dom'
import AuthPage from "./components/pages/AuthPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import compose from './utils/compose'
import hocFirebase from "./components/HOC_Firebase/hocFirebase";
import { connect } from 'react-redux'
import { updateToken } from "./actions/authActions";

export const App = ({ myFirebase, refreshToken, updateTokenAction }) => {
    useEffect(() => {
        if(refreshToken) {
            myFirebase.updateToken(refreshToken, updateTokenAction)
            setInterval(() => {
                myFirebase.updateToken(refreshToken, updateTokenAction)
            }, 3_500 * 1_000)
        }
    }, [refreshToken])

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

                <Route path='/auth' component={AuthPage}/>
            </Switch>
        </>   
    )
}

const mapStateToProps = ({ authState }) => {
    return {
        refreshToken: authState.refreshToken
    }
}

const mapDispatchToProps = {
    updateTokenAction: updateToken
}

export default compose(
    hocFirebase(),
    connect(mapStateToProps, mapDispatchToProps)
)(App)