import React from 'react'

const AuthError = ({ error }) => {
    if(error) {
        return <p style={{color: 'red', textAlign: 'center'}}>{ error }</p>
    }

    return null
}

export default AuthError