import React from "react";
import { Avatar, Heading, VStack, Box, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
        
    <Avatar src="https://i.pravatar.cc/150?img=7" name="Pete" size="150px" />
    <Heading as='h5' size='sm'>
    {greeting}
  </Heading>
    <VStack
    divider={<StackDivider borderColor='gray.200' />}
    spacing={4}
    align='stretch'
    >
       <Box h='40px' bg='tomato'>
          {bio1}  
       </Box>
       <Box h='40px' bg='pink.100'>
          {bio2}
       </Box>
    </VStack>
    </FullScreenSection>
);

export default LandingSection;
