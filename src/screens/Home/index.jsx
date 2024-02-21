import { Box } from "@chakra-ui/react";
import { FlashBar } from "@/components/molecules";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      px={{ base: 4, md: 6 }}
    >
      <Box w="100%" >
        <FlashBar />
      </Box>
    </Box>
  );
};

export default Home;
