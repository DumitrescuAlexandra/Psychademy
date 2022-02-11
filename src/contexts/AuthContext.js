import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/index";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserUID, setCurrentUserUID] = useState();

  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function deleteAccount() {
    return currentUser.delete();
  }

  function getCurrentUserId() {
    return currentUserUID;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      user && setCurrentUserUID(user.uid);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserUID,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    deleteAccount,
    getCurrentUserId,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
