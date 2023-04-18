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
  CardBody,
  Text,
  useQuery,

} from "@chakra-ui/react";
const baseURL = "http://localhost:3001/tarefas";
const baseURL2 = "http://localhost:3001/tarefas/status";


const FormList = () => {

const [buscaPorStatus, setBuscaPorStatus] = useState();
const [tarefasFiltradas, setTarefasFiltradas] = useState([]);

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
      })
      
  };

   
  return (
    <Formik>
      <Tabs>
        <TabList  onClick={() => getTarefasStatus()}>
          <Tab value="Aberto">Em Aberto</Tab>
          <Tab value="Pendente">Pendente</Tab>
          <Tab value="TodasAsTarefas">Todas as Tarefas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing="4">
              
                <Card >
                  <CardHeader>
                    <Heading size="md"> </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text> </Text>
                  </CardBody>
                </Card>
            
            </Stack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>

      </Tabs>
    </Formik>
  );
};
export default FormList;
