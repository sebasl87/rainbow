import { Box, Card, Text } from "@chakra-ui/react";
import HoverBox from "../HoverBox";
import { formatNumberToCurrency } from "../../../utils/formatNumberToCurrency";

export const ArticleContainer = ({ index, cardRefs, product }) => {
  return (
    <Box borderRadius="12px" backgroundImage={product.foto}>
      <article
        ref={(el) => (cardRefs.current[index] = el)}
        className="card"
        style={{ backgroundColor: "rainbowGreen" }}
      >
        <div className="glows"></div>
        <Card h="100%" w="100%" mb={2}></Card>
        <Text fontFamily="RainbowRegular">
          {formatNumberToCurrency(product.precio)}
        </Text>
        <HoverBox product={product} />
      </article>
    </Box>
  );
};
export default ArticleContainer;
