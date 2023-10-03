import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
// {
// isLoggedIn: false,
// token: null,
// userInfos: null,
// login: () => {},
// logout: () => {},
// }

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
      
    });
  }, []);
  <AuthContext.Provider value={{currentUser}}>

     {children }
  </AuthContext.Provider>
};
