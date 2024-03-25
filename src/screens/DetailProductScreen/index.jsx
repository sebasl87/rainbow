import { Box } from "@chakra-ui/react";
import ProductSlider from "../../components/molecules/ProductSlider";
import { ProductDetailsAddCartDescription } from "../../components/organisms";
import ShadowRainbow from "../../components/templates/ShadowRainbow";

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
        padding={{ base: 3, md: 6, lg: 9 }}
        display="flex"
        width="100vw"
        flexDirection={{ base: "column", md: "row" }}
        mt={{ base: 6, md: 8, lg: 10 }}
        mb={{ base: 14, md: 50, lg: 29 }}
        justifyContent={{ md: "space-around", lg: "space-between" }}
      >
        <ShadowRainbow>
          <ProductSlider images={imagesbb} isDiscount={false} discount="" />
        </ShadowRainbow>

        <ProductDetailsAddCartDescription
          productTitle="Remera de algodón"
          isDiscount={false}
          discountValue=""
          currentValue={10}
          productDescription="<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem porro beatae possimus, totam veritatis consequuntur accusamus soluta voluptate quo, perferendis atque minus fuga neque eos. Expedita ipsam quae cumque quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>Autem porro beatae possimus, totam veritatis consequuntur accusamus soluta voluptate quo, perferendis atque minus fuga neque eos. Expedita ipsam quae cumque quaerat."
        />
      </Box>
    </>
  );
};

export default DetailProductScreen;
