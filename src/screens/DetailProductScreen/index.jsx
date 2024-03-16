import { Box } from "@chakra-ui/react";
import ProductSlider from "../../components/molecules/ProductSlider";
import { ProductDetailsAddCartDescription } from "../../components/organisms";

const imagesbb = [
  {
    url: "/01.jpg",
  },
  {
    url: "/02.jpg",
  },
  {
    url: "/03.jpg",
  },
  {
    url: "/04.jpg",
  },
  {
    url: "/05.jpg",
  },
];

export const DetailProductScreen = () => {
  return (
    <>
      <Box
        // padding={{ base: 3, md: 6, lg: 9 }}
        display="flex"
        width="100%"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ base: 6, md: 8, lg: 10 }}
        mb={{ base: 14, md: 50, lg: 29 }}
        justifyContent={{ md: "space-around", lg: "space-between" }}
      >
        <ProductSlider images={imagesbb} isDiscount={false} discount="" />

        <ProductDetailsAddCartDescription
          productTitle="jamon"
          isDiscount={false}
          discountValue=""
          currentValue={10}
          productDescription="muchas cosas"
        />
      </Box>
    </>
  );
};

export default DetailProductScreen;
