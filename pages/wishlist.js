import React from "react";
import NextLink from "next/link";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Button,
	Text,
} from "@chakra-ui/react";
import { ProductCard } from "../components";
import { useAppContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = () => {
	const { favorites } = useAppContext();

	return (
		<Box>
			<Container maxWidth="container.xl" py={8}>
				<Heading>Your Wishlist</Heading>
				<Grid
					gap={5}
					templateColumns={{
						base: "repeat(2, 1fr)",
						md: "repeat(4, 1fr)",
						lg: "repeat(6, 1fr)",
					}}>
					{favorites &&
						favorites.map((item) => (
							<ProductCard product={item} key={item._id} />
						))}
				</Grid>
				{favorites.length < 1 && (
					<Flex direction="column" align="center" py={8}>
						<AiOutlineHeart size={150} color="#BBBBBB" />
						<Text fontSize="1.1rem" mb={6} textAlign="center">
							{"You don't have any products on your wishlist."}
						</Text>
						<NextLink href="/categories">
							<Button
								bg="blue.600"
								color="white"
								size="lg"
								rounded="none"
								_hover={{ bg: "blue.400" }}>
								Continue Shopping
							</Button>
						</NextLink>
					</Flex>
				)}
			</Container>
		</Box>
	);
};

export default Wishlist;
