import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

 const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

//create user
const createUser=(email,password)=>{
     setloading(true);
  return createUserWithEmailAndPassword(auth,email,password);
}

//create user using gmail
const singUpwithgmail=()=>{
  setloading(true);
  return signInWithPopup(auth,googleProvider)
}
//login
const login=(email,password)=>{
setloading(true);
return signInWithEmailAndPassword(auth,email,password)
}

//logout function
const logout=()=>{
 return signOut(auth);
}



// user is available or not
useEffect(()=>{
  const unsubscriber=onAuthStateChanged(auth,currentuser=>{
    setuser(currentuser);
    setloading(false);

  });
  return ()=>{
    return unsubscriber();
  }
},[])
  const authInfo = {
    user,
    loading,
    createUser,
    singUpwithgmail,
    login,
    logout,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export  default AuthProvider;
