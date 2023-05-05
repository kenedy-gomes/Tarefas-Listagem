import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../Services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
    useEffect(()=>{
      const loggedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(loggedUser);

      
        setLoading(false); 
    })

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const loggedUser = response.data.usuarios;
    const token = response.data.token;

debugger
   /* console.log("user", response.data.user);
    console.log("token", response.data.token);
*/
    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);


    api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(loggedUser);
        navigate("/listagem");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };


  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout, loading }}
    >
      
      {children}
    </AuthContext.Provider>
  );
};
