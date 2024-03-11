import { Box } from "@chakra-ui/react";
import { FlashBar } from "@/components/molecules";
import CardContainer from "../../components/organisms/CardContainer";
import { useFirestore } from "../../hooks/useFirestore";

export const Home = () => {
  const { data, isLoading, error } = useFirestore();
  console.log(isLoading, "isLoading");
  console.log(error, "error");
  console.log(data, "data");
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
