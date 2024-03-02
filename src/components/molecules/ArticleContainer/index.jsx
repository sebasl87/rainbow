import { Box, Card, Text } from "@chakra-ui/react";
import HoverBox from "../HoverBox";

export const ArticleContainer = ({ index, cardRefs }) => {
  return (
    <Box borderRadius="12px">
      <article
        ref={(el) => (cardRefs.current[index] = el)}
        className="card"
        style={{ backgroundColor: "rainbowGreen" }}
      >
        <div className="glows"></div>
        <Card h="100%" w="100%" mb={2}></Card>
        <Text fontFamily="RainbowRegular">$123.987</Text>
        <HoverBox/>
      </article>
    </Box>
  );
};
export default ArticleContainer;
