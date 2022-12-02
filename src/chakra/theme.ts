// 1. Import `extendTheme`
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "PT Sans, Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {},
    }),
  },
  components: {},
});
