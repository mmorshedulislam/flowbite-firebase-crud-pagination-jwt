import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const man = {man: 'manush'}
  const authInfo = {man};
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthProvider;
