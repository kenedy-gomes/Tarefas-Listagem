import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Textarea
} from '@chakra-ui/react'
import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'


function ModalEditar({ item:{_id, name, description, status}}) {

    const baseURL3 = "http://localhost:3001/tarefas/Editar";

    const handleSubmit1 = (data) => {
        axios
            .put(baseURL3, {
                name: data.name,
                description: data.description,
                status: data.status,
            })
            .then(function (response) {
                console.log(response);
                alert("Editado com Sucesso!");
                window.location.href = "http://localhost:3000";
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Formik
            initialValues={{
                _id, name, description, status
            }}
            onSubmit={handleSubmit1}
        >
            {({
                values,
                handleChange,
                handleSubmit,
                setFieldValue
            }) => (
                <>
                    <Button left={'30em'} onClick={onOpen}>Editar</Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Editar Tarefa</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Nome da Tarefa</FormLabel>
                                    <Input value={values.name}   onChange={handleChange} name="name"  ref={initialRef} placeholder='Name da Tarefa' />
                                </FormControl>
                                <RadioGroup
                                  onChange={(newvalue) =>
                                    setFieldValue("status", newvalue)
                                  }
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
                                    value={values.description}
                                    onChange={handleChange}
                                    name="description"                                 
                                    placeholder="Descrição da tarefa" />
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                                    Editar
                                </Button>
                                <Button onClick={onClose}>Cancelar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </>
            )}
        </Formik>
    )
}
export default ModalEditar;