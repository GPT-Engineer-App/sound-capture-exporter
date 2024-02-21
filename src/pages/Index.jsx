import React, { useState, useRef } from "react";
import { VStack, Button, useToast, Box, Heading } from "@chakra-ui/react";
import { FaMicrophone, FaStop, FaDownload } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const downloadLinkRef = useRef();
  const toast = useToast();

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
    }
  };

  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = handleDataAvailable;
      recorder.start();
      setMediaRecorder(recorder);
    }
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
    const blob = new Blob(recordedChunks, { type: "audio/wav" }); // The type might not be MP3 due to browser limitations
    const url = window.URL.createObjectURL(blob);
    downloadLinkRef.current.href = url;
    downloadLinkRef.current.download = "recording.wav"; // The file extension might not be MP3 due to browser limitations
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
        <Button leftIcon={<FaDownload />} colorScheme="green" ml={3} onClick={downloadRecording} isDisabled={!recordedChunks.length}>
          Download
        </Button>
        <a ref={downloadLinkRef} style={{ display: "none" }}>
          Download Link
        </a>
      </Box>
    </VStack>
  );
};

export default Index;
