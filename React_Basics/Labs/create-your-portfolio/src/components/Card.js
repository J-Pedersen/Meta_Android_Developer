import { 
  Heading, 
  HStack, 
  Image, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
  <VStack
    as="article"
    bg="white"
    color="black"
    borderRadius="xl"
    overflow="hidden"
    align="left"
  >
    <Image 
      src={imageSrc} 
      alt={title} 
      borderRadius='xl' 
    />
    <VStack 
      align="start" 
      px={4} 
      py={2}
    >
      <Heading 
        as="h3" 
        size="md"
      >
        {title}
      </Heading>
      <Text 
        fontSize="md"
      >
        {description}
      </Text>
    </VStack>
    <HStack 
      px={4} 
      pb={4} 
    >
      <Text 
        fontSize="sm" 
        cursor="pointer"
        style={{
          padding: "8px"
        }}
       _hover={{
          outline: "2px solid #000",
          padding: "8px", 
          borderRadius: "8px",
        }}
      >
        See More &nbsp; 
        <FontAwesomeIcon 
          icon={faArrowRight} 
          size="1x" 
        />
      </Text>
    </HStack>
  </VStack>
  );
};

export default Card;