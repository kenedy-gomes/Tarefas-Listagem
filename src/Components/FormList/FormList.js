import "./FormList.css";
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
} from "@chakra-ui/react";
const FormList = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Em Aberto</Tab>
        <Tab>Em Andamento</Tab>
        <Tab>Finalizadas</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack spacing="4">
            {["elevated", "outline", "filled", "unstyled"].map((variant) => (
              <Card key={variant} variant={variant}>
                <CardHeader>
                  <Heading size="md"> {variant}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>variant = {variant}</Text>
                </CardBody>
              </Card>
            ))}
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
  );
};
export default FormList;
