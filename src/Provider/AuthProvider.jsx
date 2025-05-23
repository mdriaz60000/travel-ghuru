import  { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password );
  };

  const logIn = (email, password) => {
   setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlelogIn = () => {
setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
setLoading(true)
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user auth changed", currentUser);
      setUser(currentUser);
  setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    googlelogIn,
    loading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
