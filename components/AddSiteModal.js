import React from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import { useState } from 'react';
import firebase from '../lib/firebase';

const firestore = firebase.firestore()
console.log(firestore)

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    //create site
    try {
      console.log("data :", data)

      // créer une entrée dans la base de données en passant les valeurs de siteName et siteLink
      const res = await firestore.collection('sites').add({
        link: data.siteLink,
        name: data.siteName
      });
      // createSite(siteName,siteLink);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        variant="solid"
        size="md"
        m={5}
        onClick={onOpen}
      >
        Add site
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ModalHeader>Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="space-between"
              isRequired
              backgroundColor="#f9f9f9"
              border={20}
              p={10}
            >
              <Text ml={20} mr={20}>
                Add Site
              </Text>
              <FormErrorMessage>Error message</FormErrorMessage>
              <Box mt={10} ml={20} mr={20}>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Site name"
                  name="siteName"
                  ref={register({ required: true })}
                />
              </Box>
              <Box mt={10} ml={20} mr={20}>
                <FormLabel>link</FormLabel>
                <Input
                  placeholder="https://greatstuff.com"
                  name="siteLink"
                  ref={register({ required: true })}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row-reverse"
                justifyContent="flex-start"
                pt={20}
                pb={30}
                ml={20}
                mr={20}
              >
                <Button variant="solid" size="md" ml={5} onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="solid" size="md" type="submit">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
