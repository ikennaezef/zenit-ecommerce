import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
	body: "Work Sans, sans-serif",
	heading: "Inter, sans-serif",
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
