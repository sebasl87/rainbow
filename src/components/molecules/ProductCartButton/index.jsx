import { ButtonCustomIcon, IconCart } from "../../atoms";
import { useState } from "react";

import { Box, Image } from "@chakra-ui/react";

export const ProductCartButton = () => {
  const inititalState = { quantity: 0 };
  const [quantity, setQuantity] = useState(inititalState);

  return (
    <>
      {quantity?.quantity === 0 || quantity === undefined ? (
        <ButtonCustomIcon
          buttonText="Agregar"
          iconLeft={<IconCart />}
          handleClick={() => setQuantity({ quantity: 1 })}
        />
      ) : (
        <Box display="flex">
          <>
            <Box
              width={{ base: 8, md: 10, lg: 12 }}
              height={{ base: 8, md: 10, lg: 12 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ opacity: "0.8" }}
              background="#777978"
              color="#fff"
              borderTopLeftRadius={6}
              borderBottomLeftRadius={6}
              onClick={() => setQuantity({ quantity: quantity.quantity - 1 })}
            >
              <Image src="/minus.svg" width={{ md: 4 }} />
            </Box>
            <Box
              width={{ base: 8, md: 10, lg: 12 }}
              height={{ base: 8, md: 10, lg: 12 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderTop="2px solid #777978"
              borderBottom="2px solid #777978"
              fontSize={{ md: 16 }}
              color="#1A202C"
            >
              {quantity.quantity}
            </Box>
            <Box
              width={{ base: 8, md: 10, lg: 12 }}
              height={{ base: 8, md: 10, lg: 12 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ opacity: "0.8" }}
              background="#777978"
              color="#fff"
              borderTopRightRadius={6}
              borderBottomRightRadius={6}
              onClick={() => setQuantity({ quantity: quantity.quantity + 1 })}
            >
              <Image src="/plus.svg" width={{ md: 4 }} />
            </Box>
          </>
        </Box>
      )}
    </>
  );
};

export default ProductCartButton;
