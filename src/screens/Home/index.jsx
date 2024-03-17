import { Box, Spinner } from "@chakra-ui/react";
import { FlashBar } from "@/components/molecules";
import CardContainer from "../../components/organisms/CardContainer";
import { useFirestore } from "../../hooks/useFirestore";
import { useEffect } from "react";
import { productsList } from "../../jotai/atoms";
import { useSetAtom } from "jotai";

export const Home = () => {
  const { data, isLoading } = useFirestore();
  const setProductsList = useSetAtom(productsList);
  useEffect(() => {
    data && setProductsList(data);
  }, [data]);

  return (
    <Box display="flex" flexDirection="column" width="100%" alignItems="center">
      <FlashBar />
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <CardContainer />
      )}
      <FlashBar />
    </Box>
  );
};

export default Home;
