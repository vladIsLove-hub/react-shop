export const signIn = (idToken, email) => {
    return {
        type: 'SIGN_IN',
        idToken,
        email
    }
}

export const signInError = (errMessage) => {
    return {
        type: 'SIGN_IN_ERROR',
        error: errMessage
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    }
}

export const updateToken = (newToken) => {
    return {
        type: 'UPDATE_TOKEN',
        newToken
    }
}