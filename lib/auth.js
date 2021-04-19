import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import Cookies from 'js-cookie';

const authContext = createContext();

// Provider react => Transmet des données à tous ses descendants
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook (useXXX) sert à accéder et modifier de la donnée
export const useAuth = () => {
  // Context react, c'est un store particulier intégré à react
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('response', response)
        return response.user;
      });
  };

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signinWithEmailPassword = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // utiliser valeurs dynamiques des input du form
      .then((response) => {
        setUser(response.user);
        return response.user;
        // catch afficher l'erreur en console
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // Effect react, côté navigateur uniquement
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const userObject = JSON.stringify({ 'userId': user.uid, 'userEmail': user.email });
        console.log(userObject)
        Cookies.set('user', userObject)
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    createUser,
    signinWithGithub,
    signinWithEmailPassword,
    signout
  };
}
