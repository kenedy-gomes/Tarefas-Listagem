import { Button, Input, Textarea } from "@chakra-ui/react";

import "./FormRegister.css";

const FormRegister = () => {
  return (
    <div className="form-container-a">
      <h2>Adicionar Tarefas</h2>
      <Input width={"100%"} placeholder="Titulo" />
      <Textarea placeholder="Here is a sample placeholder" />
      <Button width={"100%"} margin={"10px 0px 0px 0px"} colorScheme="blue">
        Adicionar
      </Button>
    </div>
  );
};
export default FormRegister;
