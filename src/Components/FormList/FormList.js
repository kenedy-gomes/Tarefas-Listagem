import "./FormList.css";
import { Formik } from "formik";
import axios from "axios";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Card,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import ModalEditar from "../../Modal/ModalEditar/ModalEditar";
import ModalExcluir from "../../Modal/ModalExcluir/ModalExcluir";

const baseURL = "http://localhost:3001/tarefas/status";

const STATUS = {
  ABERTO: "Aberto",
  PENDENTE: "Pendente",
  CONCLUIDO: "Concluido",
};
const FormList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [error, SetError] = useState(null);

  const buscasTarefasPorStatus = async (status) => {
    axios
      .get(baseURL, {
        params: {
          status,
        },
      })
      .then((response) => {
        console.log("response status", status);

        console.log(response.data);

        setTarefas(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição", error);
        SetError(error);
      });
  };
  return (
    <Formik
      initialValues={{
        id: null,
        name: "",
        description: "",
        status: "",
      }}
    >
      <Tabs>
        <TabList>
          <Tab
            value="Aberto"
            onClick={async () => buscasTarefasPorStatus(STATUS.ABERTO)}
          >
            Em Aberto
          </Tab>
          <Tab
            value="Pendente"
            onClick={async () => buscasTarefasPorStatus(STATUS.PENDENTE)}
          >
            Pendente
          </Tab>
          <Tab
            value="Concluido"
            onClick={async () => buscasTarefasPorStatus(STATUS.CONCLUIDO)}
          >
            Concluido
          </Tab>
          <Tab
            value="TodasAsTarefas"
            onClick={async () => buscasTarefasPorStatus()}
          >
            Todas as Tarefas
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="container-map">
            {tarefas.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map" key={_id}>
                  <Stack spacing="4">
                    <Card>
                      <CardHeader key={_id}>
                        <Heading size="md">Name: {name}</Heading>
                        <Text key={name}>Descrição: {description}</Text>
                        <Text key={description}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel className="container-map">
            {tarefas.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map" key={_id}>
                  <Stack spacing="4">
                    <Card>
                      <CardHeader key={_id}>
                        <Heading size="md">Name: {name}</Heading>
                        <Text key={name}>Descrição: {description}</Text>
                        <Text key={description}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel className="container-map">
            {tarefas.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map" key={_id}>
                  <Stack spacing="4">
                    <Card>
                      <CardHeader key={_id}>
                        <Heading size="md">Name: {name}</Heading>
                        <Text key={name}>Descrição: {description}</Text>
                        <Text key={description}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel className="container-map">
            {tarefas.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map" key={_id}>
                  <Stack spacing="4">
                    <Card>
                      <CardHeader key={_id}>
                        <Heading size="md">Name: {name}</Heading>
                        <Text key={name}>Descrição: {description}</Text>
                        <Text key={description}>Status: {status}</Text>
                        <ModalEditar
                          item={{ _id, name, description, status }}
                        />
                        <ModalExcluir item={{ _id }} />
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Formik>
  );
};
export default FormList;
