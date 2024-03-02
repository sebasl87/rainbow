import { Box, Button, Center, Circle, HStack, Tag } from "@chakra-ui/react";

export const HoverBox = () => {
  return (
    <Box
      bg="rainbowGreenLight"
      pos="absolute"
      borderRadius="12px"
      mt="70%"
      opacity={0}
      transition="opacity 0.3s ease-in-out"
      _hover={{ opacity: 1 }}
      w="100%"
      h="30%"
    >
      <Center p={3} display="flex" flexDirection="column">
        <HStack spacing={2} mb={2}>
          {["red", "green", "blue"].map((color) => (
            <Circle size={6} key={color} bg={color} />
          ))}
        </HStack>
        <HStack spacing={2} mb={2}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size="sm" key={size} variant="solid" colorScheme="orange">
              {size}
            </Tag>
          ))}
        </HStack>
        <Button>Agregar a mi carrito</Button>
      </Center>
    </Box>
  );
};

export default HoverBox;
