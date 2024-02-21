import React from "react";
import { VStack, Button, useToast, Box, Heading } from "@chakra-ui/react";
import { FaMicrophone, FaStop, FaDownload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const startRecording = () => {
    toast({
      title: "Recording started.",
      description: "Recording is not actually implemented.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const stopRecording = () => {
    toast({
      title: "Recording stopped.",
      description: "Recording is not actually implemented.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const downloadRecording = () => {
    toast({
      title: "Download started.",
      description: "Downloading is not actually implemented.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} justifyContent="center" alignItems="center" height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading mb={4}>Mic Recorder</Heading>
        <Button leftIcon={<FaMicrophone />} colorScheme="blue" onClick={startRecording}>
          Start Recording
        </Button>
        <Button leftIcon={<FaStop />} colorScheme="red" ml={3} onClick={stopRecording}>
          Stop Recording
        </Button>
        <Button leftIcon={<FaDownload />} colorScheme="green" ml={3} onClick={downloadRecording}>
          Download MP3
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
