import React, { useState } from "react";
import { VStack, Button, useToast, Box, Heading } from "@chakra-ui/react";
import { FaMicrophone, FaStop, FaDownload } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const toast = useToast();

  const toggleRecording = () => {
    if (isRecording) {
      toast({
        title: "Recording stopped.",
        description: "Recording is not actually implemented.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Recording started.",
        description: "Recording is not actually implemented.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsRecording(!isRecording);
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
        {isRecording ? (
          <Button leftIcon={<FaStop />} colorScheme="red" onClick={toggleRecording}>
            Stop Recording
          </Button>
        ) : (
          <Button leftIcon={<FaMicrophone />} colorScheme="blue" onClick={toggleRecording}>
            Start Recording
          </Button>
        )}
        <Button leftIcon={<FaDownload />} colorScheme="green" ml={3} onClick={downloadRecording}>
          Download MP3
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
