import React from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = React.createContext();




// authWrapper ye he na baithke watch krega  (Authentication ka dhyan rkhega ye )
// jo boys or girls are logged in only these boys or girl are shown the feed otherwise not seen the feed
function AuthWrapper({ children }) {
    console.log("hey i am auth.js me hu")
    //  feature created means it is bodyguard ye authWrapper ko pta ho ki ye email and password kha se aarha he
    // hmare ko ye email and password frontend se milega
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const store = {
        login
    }

    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthWrapper