import { Button } from "@chakra-ui/react";

export const ButtonCustomIcon = ({ buttonText, iconLeft, handleClick }) => {
  return (
    <Button
      leftIcon={<>{iconLeft}</>}
      onClick={handleClick}
      variant="solid"
      bg="danoneBlue"
      color="white"
      _hover={{ background: "rgba(49, 130, 206, 1)" }}
      _active={{ bg: "#002677" }}
      size={{ base: "sm", md: "md", lg: "lg" }}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonCustomIcon;
