import { Button, Input, Radio, Stack, Textarea, RadioGroup } from "@chakra-ui/react";
import "./FormRegister.css";
import axios from "axios";
import { Formik } from "formik";

const baseURL3 = "http://localhost:3001/tarefas/cadastro";

const FormRegister = () => {

  const handleSubmit1 = (data) => {
    axios
      .post(baseURL3, {
        name: data.name,
        description: data.description,
        status: data.status,
      })
      .then(function (response) {
        console.log(response);
        alert("Cadastro efetuado!");
        window.location.href = "http://localhost:3000";
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <Formik
      initialValues={{
        id: null,
        name: "",
        description: "",
        status: "",
      }}
      onSubmit={handleSubmit1}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,

      }) => (

        <div  className="form-container-a" method="post">
          <h2>Adicionar Tarefas</h2>

          <Input width={"100%"} type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Nome da Tarefa" />


          <RadioGroup
            onChange={(newvalue) => setFieldValue("status", newvalue)}
            value={values.status}
          >
            <Stack
              direction="row"
              textAlign="center"
              alignItems="center"
              alignContent="center"
              margin="10px 0px 10px 0px"
            >
              <Radio value="Aberto">Aberto</Radio>
              <Radio value="Pendente">Pendente</Radio>
              <Radio value="Concluido">Concluido</Radio>
            </Stack>
          </RadioGroup>


          <Textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Descrição da tarefa" />


          <Button  onClick={handleSubmit} width={"100%"} margin={"10px 0px 0px 0px"} colorScheme="blue">
            Adicionar
          </Button>
        </div>
      )}
    </Formik>
  );
};
export default FormRegister;
