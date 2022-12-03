import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Standard from "../components/layouts/Standard";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* To keep track of athentication  */}
      <ChakraProvider theme={theme}>
        <Standard>
          <Component {...pageProps} />
        </Standard>
      </ChakraProvider>
    </RecoilRoot>
  );
}
