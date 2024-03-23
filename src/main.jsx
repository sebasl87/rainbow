import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/chackraTheme";
import "@/styles/globals.css";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ApolloProvider } from "@apollo/client";
import Client from "./api/apollo/apollo";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <DevTools />
    <ApolloProvider client={Client}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes />
        </QueryClientProvider>
      </ChakraProvider>
    </ApolloProvider>
  </Provider>
);
