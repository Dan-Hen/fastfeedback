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
  ModalContent,
  useToast,
  useDisclosure
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import { useState } from 'react';
import firebase from '../lib/firebase';
import { CreateSite } from '../lib/db'

console.log(firebase)
const firestore = firebase.firestore()

const AddSiteModal = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    try {
      console.log("data :", data)

      CreateSite(data)
      // createSite(siteName,siteLink);

    } catch (error) {
      console.error(error)
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
        <ModalContent
          as="form"
          onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              variant="solid"
              size="md"
              type="submit" onClick={() =>
              toast({
                title: "Site added.",
                description: "Good job!",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }>
              Submit
            </Button>
          </Box>
        </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
