import { Box, Card, Image, Text } from "@chakra-ui/react";
import HoverBox from "../HoverBox";
import { formatNumberToCurrency } from "../../../utils/formatNumberToCurrency";

export const ArticleContainer = ({ index, cardRefs, product }) => {
  return (
    <Box borderRadius="12px" backgroundImage={product.photos[0].url}>
      <article
        ref={(el) => (cardRefs.current[index] = el)}
        className="card"
        style={{ backgroundColor: "rainbowGreen" }}
      >
        <div className="glows"></div>
        <Card h="100%" w="100%" mb={2}>
          <Image
            src={product.photos[0].url}
            alt={product.photos[0].alt}
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Card>
        <Text fontFamily="RainbowRegular">
          {formatNumberToCurrency(product.price.total)}
        </Text>
        <HoverBox product={product} />
      </article>
    </Box>
  );
};
export default ArticleContainer;
