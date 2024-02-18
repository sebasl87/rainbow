import { Cart, InputSearch } from "@/components/molecules";
import { useBreakpoints } from "@/hooks";

import { Box, Image, Text } from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const {  desktop } = useBreakpoints();
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      searchText.length > 2 &&
        navigate(`/e-commerce/product-list/${searchText}`);
      console.log("first");
    }
  };

  const itemsCart = "28";

  return (
    <Box
      display="flex"
      justifyContent="center"
      px={{ lg: 6 }}
      py={{ lg: 5 }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="snow"
      zIndex="999"
    >
      {desktop ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="1200px"
        >
          <Image
            data-testid="logoImage"
            src="/RainbowLogoChico.png"
            alt="logo"
            w={{ lg: 20 }}
            onClick={() => navigate("/")}
            cursor="pointer"
          />
          <Box maxWidth="504px" display="flex" width="100%" ml="64px">
            <InputSearch
              placeHolder="Buscar productos"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
              handleClickOnIcon={() =>
                searchText.length > 2 &&
                navigate(`/e-commerce/product-list/${searchText}`)
              }
            />
          </Box>
          <Box ml="64px" width="100%" maxW={108}>
            <Text
            fontSize={16}
              cursor="pointer"
              fontFamily="RainbowRegular"
              _hover={{ color: "rainbowGreen" }}
            >
              Escribinos...
            </Text>
          </Box>
          <Box
            maxW="72px"
            display="flex"
            justifyContent="flex-end"
            width="100%"
          >
            <Cart
              itemsCart={itemsCart}
              handleClick={() => navigate("/e-commerce/carrito")}
            />
          </Box>
        </Box>
      ) : (
        <Box display="flex" width="100%" flexDirection="column">
          <Box
            height={{ base: "72px", md: "80px" }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            py={{ base: 4, md: 5 }}
            alignItems="center"
          >
            <Image
              data-testid="logoImageMobile"
              src="/RainbowLogoChico.png"
              alt="logoMobile"
              w={{ base: "32px", md: "146px" }}
              onClick={() => navigate("/")}
              cursor="pointer"
            />
            <Cart
              itemsCart={itemsCart}
              handleClick={() => navigate("/e-commerce/cart")}
            />
          </Box>
          <Box
            height={{ base: "56px", md: "72px" }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            py={{ base: 3, md: 4 }}
          >
            <InputSearch
              placeHolder="Buscar productos"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
