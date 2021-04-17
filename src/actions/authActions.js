export const signIn = (idToken, email, refreshToken, expiresIn) => {
    return {
        type: 'SIGN_IN',
        idToken,
        email,
        refreshToken,
        expiresIn
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

export const updateToken = (idToken, refreshToken) => {
    return {
        type: 'UPDATE_TOKEN',
        idToken,
        refreshToken
    }
}