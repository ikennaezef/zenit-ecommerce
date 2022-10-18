import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Banner = () => {
	return (
		<Box
			bgImage="/images/banner.webp"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			display="flex"
			alignItems="center"
			h="30rem">
			<Container maxW="container.lg">
				<Grid alignContent="center" py={5}>
					<Box color="white">
						<Flex direction="column" spacing={1}>
							<Text color="black" fontStyle="italic" fontWeight={500}>
								Buy 2 Get 1 Free!!
							</Text>
							<Heading fontWeight={700} fontSize="2.2rem">
								Fashionable
							</Heading>
							<Heading fontWeight={400}>Collection</Heading>
							<Text fontSize={{ base: "0.8rem", md: "1rem" }}>
								Get free shipping on all orders above N25,000
							</Text>
							<Button
								mt={5}
								bgColor="black"
								width="fit-content"
								rounded="sm"
								rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}
								_hover={{ transform: "scale(0.95)" }}>
								Shop Now
							</Button>
						</Flex>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default Banner;
