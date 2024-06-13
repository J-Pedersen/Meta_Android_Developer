import React from "react";
import { 
  Avatar, 
  Heading, 
  VStack, 
  useBreakpointValue 
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => {
  const headingSize = useBreakpointValue({ 
    base: "2xl", 
    md: "3xl" 
  });
  return (
    <FullScreenSection
      as="section"
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack 
        spacing={16}
      >
        <VStack 
          spacing={4}
        >
          <Avatar 
            src="https://i.pravatar.cc/150?img=7" 
            size="2x1" 
          />
          <Heading 
            size="lg"
          >
            {greeting}
          </Heading>
        </VStack>
        <VStack spacing={6}>
          <Heading 
            size={headingSize}
          >
            {bio1}
          </Heading>
          <Heading 
            size={headingSize}
          >
            {bio2}
          </Heading>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;