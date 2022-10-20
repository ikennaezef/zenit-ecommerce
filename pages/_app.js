import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
	body: "Work Sans, sans-serif",
	heading: "Zilla Slab, serif",
};

const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
