import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Listagem from "./Pages/Listagem/Listagem.js";

import { AuthProvider, AuthContext } from "./contexts/auth.js";

const Routers = () => {
  /* const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };

*/
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Listagem />} />
      </Routes>
    </AuthProvider>
  );
};
export default Routers;
