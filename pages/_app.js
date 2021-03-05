import { ProvideAuth } from '../lib/auth';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          color: "white", // Normally, it is "semibold"
          margin: "10px",
          bg: "#8E98FA",
          background: "#FAB79B",
          backgroundColor: "#FAB79B",
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
