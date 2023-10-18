import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/index.js";
import Listagem from "./Pages/Listagem/Listagem.js";
 
 
import { AuthProvider, AuthContext } from "./contexts/auth.js";

const Routers = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };


  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/listagem"
          element={
        
              <Listagem />
         
          }
        />
   
      </Routes>
    </AuthProvider>
  );
};
export default Routers;
