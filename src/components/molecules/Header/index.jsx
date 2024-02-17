import { useBreakpoints } from "@/hooks";
import { Box, Button, Image } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { tablet } = useBreakpoints();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      px={{ base: "16px", md: "24px" }}
      py={{ base: "16px", md: "20px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      zIndex="999"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="1200px"
      >
        <Image
          data-testid="logoImage"
          src={tablet ? "/danoneLogoLarge.png" : "/danoneLogoMobile.png"}
          alt="logo"
          w={{ base: "32px", md: "162px", lg: "194px" }}
          onClick={() => navigate("/")}
          cursor="pointer"
        />
        <Box display="flex" alignItems="center">
          {tablet && (
            <Box mr={{ base: "24px", lg: "32px" }}>
              <Button variant="outline">Contacto</Button>
            </Box>
          )}
          <Button>Ingresar</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
