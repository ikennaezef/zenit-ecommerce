import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Layout } from "../components";

const fonts = {
	body: "Work Sans, sans-serif",
	heading: "Zilla Slab, serif",
};

const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
