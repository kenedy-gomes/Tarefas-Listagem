import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

 
import Listagem from "./Pages/Listagem/Listagem.js";
import Login from "./Pages/Login/index.js";
import Register from "../src/Pages/Register/Cadastro.js";
/*import { AuthProvider, AuthContext } from "./contexts/auth.js";*/

const Routers = () => {
  /*const Private = ({ children }) => {
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
        <Route path="/listagem" element={<Listagem />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
};
export default Routers;
