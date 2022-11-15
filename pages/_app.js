import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Layout } from "../components";
import { ContextWrapper } from "../context";
import { Toaster } from "react-hot-toast";

const fonts = {
	body: "Work Sans, sans-serif",
	heading: "Zilla Slab, serif",
};

const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<ContextWrapper>
				<Layout>
					<Toaster />
					<Component {...pageProps} />
				</Layout>
			</ContextWrapper>
		</ChakraProvider>
	);
}
export default MyApp;
