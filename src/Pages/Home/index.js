import Header from "../../Components/Header/Header";
import {
  Button,
} from "@chakra-ui/react";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container-header">
        <Header />
      </div>
      <div className="container">
        <div className="form">
          <h1>Aplicação de listagem e cadastro de tarefas</h1>
          <p>Faça o login ou crie uma conta!</p>
          <Button  onClick={() => (window.location.href = "/cadastrar")}>Registrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
