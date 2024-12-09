/* eslint-disable no-undef */
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase";
import { createContext, useEffect } from "react";
import { useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const Auth = ({ children }) => {

     const [user, setUser] = useState(null);
     

     const googleLogin = () => {

          return signInWithPopup(auth, googleProvider)
     }

     useEffect(() => {

          const stateCheck = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
          })
          return () => {
               stateCheck();
          }
     }, [])

     const infoUser = {
          googleLogin, user
     }



     return (
          <AuthContext.Provider value={infoUser}>
               {children}
          </AuthContext.Provider>
     );
};

export default Auth;