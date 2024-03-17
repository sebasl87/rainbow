import { ProductCartButton } from "../../molecules";
import { useBreakpoints } from "@/hooks";
import { formatNumberToCurrency } from "../../../utils/formatNumberToCurrency";
import { splitText } from "../../../utils/splitText";
import { Box, Divider } from "@chakra-ui/react";
import ColorSelector from "../../molecules/ColorSelector";
import SizeSelector from "../../molecules/SizeSelector";

export const ProductDetailsAddCartDescription = ({
  productTitle,
  isDiscount,
  discountValue,
  currentValue,
  productDescription,
}) => {
  const { tablet } = useBreakpoints();
  const options = ["Hotel", "Cafetería", "Restaurante", "Otro"];
  return (
    <Box
      display="flex"
      width="100%"
      maxW={{ base: "100%", md: 312, lg: 532 }}
      color="#4A5568"
      mt={{ base: 5, md: 0 }}
      ml={{ base: 0, md: 12, lg: 17 }}
      flexDirection="column"
    >
      <Box
        fontFamily="RainbowRegular"
        fontSize={{ base: 24, lg: 28 }}
        lineHeight={{ base: 6, md: 7, lg: 8 }}
      >
        {tablet
          ? splitText(productTitle || "", 70)
          : splitText(productTitle || "", 60)}
      </Box>
      <ColorSelector colors={["#FF0000", "#00FF00", "#0000FF"]} />
      <SizeSelector sizes={["1", "2", "3"]} />
      <Box mt={2} color="#718096" fontSize={{ base: 12, md: 14 }}>
        Precio:
      </Box>
      {isDiscount ? (
        <Box mt={{ base: 2, md: 2, lg: 3 }}>
          <Box
            fontSize={{ base: 12, md: 16, lg: 18 }}
            textDecoration="line-through"
            color="#718096"
          >
            {formatNumberToCurrency(discountValue || 0)}
          </Box>
          <Box
            fontWeight="700"
            fontSize={{ base: 14, md: 18, lg: 20 }}
            color="#38A169"
          >
            {formatNumberToCurrency(currentValue)}
          </Box>
        </Box>
      ) : (
        <Box
          mt={{ base: 2, md: 2, lg: 3 }}
          color="#4A5568"
          fontWeight="700"
          fontSize={{ base: 14, md: 18, lg: 20 }}
        >
          {formatNumberToCurrency(currentValue)}
        </Box>
      )}

      <Box mt={{ base: 3, md: 4, lg: 5 }}>
        <ProductCartButton productDetails />
      </Box>
      <Divider mt={{ base: 2, md: 5, lg: 6 }} />
      <Box
        mt={{ base: 2, md: 5, lg: 6 }}
        color="#718096"
        fontSize={{ base: 12, md: 14, lg: 16 }}
        lineHeight={{ base: 4, md: 5, lg: 6 }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: productDescription,
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductDetailsAddCartDescription;
