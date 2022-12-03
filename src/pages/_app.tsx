import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Standard from "../components/layouts/Standard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Standard>
        <Component {...pageProps} />
      </Standard>
    </ChakraProvider>
  );
}
