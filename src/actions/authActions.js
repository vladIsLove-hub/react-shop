export const signUp = (value) => {
    return {
        type: 'SIGN_UP',
        payload: value
    }
}

export const signIn = (idToken) => {
    return {
        type: 'SIGN_IN',
        idToken
    }
}