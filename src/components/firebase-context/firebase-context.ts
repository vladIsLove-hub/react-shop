import React, { createContext } from 'react'
import Firebase from '../../firebase'

const {
    Provider: FirebaseProvider,
    Consumer: FirebaseConsumer
} = createContext(new Firebase())

export {
    FirebaseConsumer,
    FirebaseProvider
}