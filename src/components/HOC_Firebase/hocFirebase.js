import React from 'react'
import { FirebaseConsumer } from '../firebase-context/firebase-context'

const hocBooksstoreService = () => ( Wrapped ) => {
    return ( props ) => {
        return(
            <FirebaseConsumer>
                {
                    ( myFirebase ) => {
                        return (
                            <Wrapped {...props} myFirebase={myFirebase} />
                        )
                    }
                }
            </FirebaseConsumer>
        )
    }
}

export default hocBooksstoreService