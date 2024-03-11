
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/firestore";

export const useFirestore = () => {
  return useQuery({
    queryKey: "firestore",
    queryFn: fetchData,
    
  });
};
