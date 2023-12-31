import { Heading, Image, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../index.css"
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack align="start" spacing={4} p={0} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
      <Image
        w="100%"
        h="auto"
        src={imageSrc}
        alt={title}
        borderRadius="lg"
      />
      <Heading as="h4" size="1x" color="#36454F" ml={4}>
        {title}
      </Heading>
      <Text fontSize="sm" color="#36454F" ml={4}>
        {description}
      </Text>
      <HStack spacing={2} ml={4} mb={2}>
      <Button
          as="a"
          variant="link"
          href="#placeholder-link"
          textDecoration="none"
          color="gray.600"
          fontWeight="normal"
          _hover={{ textDecoration: "underline" }}
        >
          See more
        </Button>
        <FontAwesomeIcon icon={faArrowRight} size="1x"  color="#36454F"/>
      </HStack>
    </VStack>
  );
};

export default Card;