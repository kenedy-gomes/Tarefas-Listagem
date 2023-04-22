import { Button } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { Alert, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/tarefas";

function ModalExcluir({ item: { _id } }) {
  const handleDelete = (_id) => {
    axios
      .delete(baseURL + "/" + _id)
      .then(function (response) {
        alert("Tarefa deletada com sucesso!", response);
        window.location.href = "http://localhost:3000";
      })
      .catch(function (error) {
        Alert("Falha ao deletar tarefa", error);
      });
  };

  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <a
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <DeleteIcon
          margin={"0px 10px 0px 0px"}
          float={"right"}
          cursor={"pointer"}
        />
      </a>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent margin={"0em 0em 15em 0em"}>
          <ModalHeader margin={"0.5em"}>
            Tem Certeza que Deseja Excluir essa Tarefa?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text margin={"0.5em"}>Esse ato é Irreversível !</Text>
          </ModalBody>
          <ModalFooter>
            <Button margin={2} onClick={() => handleDelete(_id)}>
              Excluir
            </Button>
            <Button margin={2} onClick={onClose}>
              Voltar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalExcluir;
