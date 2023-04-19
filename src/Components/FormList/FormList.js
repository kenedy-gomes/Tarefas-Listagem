import "./FormList.css";
import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
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
 
 
const baseURL2 = "http://localhost:3001/tarefas/status";
const STATUS = {
  ABERTO: 'Aberto',
  PENDENTE:  'Pendente',
  CONCLUIDO: 'Concluido',
}
const FormList = () => {
  const [buscaPorStatus, setBuscaPorStatus] = useState();
  const [tarefasFiltradas, setTarefasFiltradas] = useState([]);
  const [currentState, setCurrentState] = useState(STATUS.ABERTO)
  const [error, SetError] = useState(null);

  const handleStatus = (event) => {
    setBuscaPorStatus(event.target.value);
  };
  const getTarefasStatus = async () => {
    axios
      .get(baseURL2, {
        params: {
          status: buscaPorStatus,
        },
      })
      .then((response) => {
        setTarefasFiltradas(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição", error);
        SetError(error);
      });
  };
  const [currentList, setCurrentList] = useState([])

 useEffect(() => {
  const fetch = async () => {
    const response = await axios.get("http://localhost:3001/tarefas/status", {
      params: {
        status: currentState
      }
    })
    setCurrentList(response.data);
  }
  fetch();
 }, [currentState, currentList, setCurrentList]);

  return (
    <Formik
      initialValues={{
        id: null,
        name: "",
        description: "",
        status: "",
      }}
      onSubmit={getTarefasStatus}
    >
      <Tabs>
        <TabList onClick={() => getTarefasStatus()}>
          <Tab value="Aberto" onClick={() => setCurrentState(STATUS.ABERTO)}>Em Aberto</Tab>
          <Tab value="Pendente" onClick={() => setCurrentState(STATUS.PENDENTE)}>Pendente</Tab>
          <Tab value="Concluido" onClick={() => setCurrentState(STATUS.CONCLUIDO)}>Concluido</Tab>
          <Tab value="TodasAsTarefas">Todas as Tarefas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="container-map">
            {currentList?.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map">
                  <Stack spacing="4">
                    <Card onChange={handleStatus}>
                      <CardHeader key={_id}>
                        <Heading size="md">ID: {_id}</Heading>
                        <Text key={name}>Name: {name}</Text>
                        <Text key={description}>Descrição: {description}</Text>
                        <Text key={status}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel>
          <TabPanel className="container-map">
            {currentList?.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map">
                  <Stack spacing="4">
                    <Card onChange={handleStatus}>
                      <CardHeader key={_id}>
                        <Heading size="md">ID: {_id}</Heading>
                        <Text key={name}>Name: {name}</Text>
                        <Text key={description}>Descrição: {description}</Text>
                        <Text key={status}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          </TabPanel>
          <TabPanel>
          <TabPanel className="container-map">
            {currentList?.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map">
                  <Stack spacing="4">
                    <Card onChange={handleStatus}>
                      <CardHeader key={_id}>
                        <Heading size="md">ID: {_id}</Heading>
                        <Text key={name}>Name: {name}</Text>
                        <Text key={description}>Descrição: {description}</Text>
                        <Text key={status}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel  className="container-map">
            {currentList?.map((tarefasFiltradas) => {
              const { _id, name, description, status } = tarefasFiltradas;
              return (
                <div className="border-map">
                  <Stack spacing="4">
                    <Card onChange={handleStatus}>
                      <CardHeader key={_id}>
                        <Heading size="md">ID: {_id}</Heading>
                        <Text key={name}>Name: {name}</Text>
                        <Text key={description}>Descrição: {description}</Text>
                        <Text key={status}>Status: {status}</Text>
                      </CardHeader>
                    </Card>
                  </Stack>
                </div>
              );
            })}
          </TabPanel>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Formik>
  );
};
export default FormList;
