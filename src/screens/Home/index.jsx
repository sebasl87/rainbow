import { Box } from "@chakra-ui/react";
import { FlashBar } from "@/components/molecules";
import CardContainer from "../../components/organisms/CardContainer";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      px={{ base: 4, md: 6 }}
    >
      <FlashBar />
      <CardContainer />
      <FlashBar />

    </Box>
  );
};

export default Home;
