import { ProvideAuth } from '../lib/auth';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          color: "white",
          margin: "10px",
          bg: "#8E98FA",
          background: "#FAB79B",
          backgroundColor: "#FAB79B",
          _hover: {
            color: "#FAB79B",
            bg: "#8E98FA",
            background: "black",
            backgroundColor: "black",
          }
        },
      },
    },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp;
