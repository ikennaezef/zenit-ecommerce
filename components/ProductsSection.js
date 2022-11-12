import React from "react";
import NextLink from "next/link";
import { Box, Button, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductsSection = ({ title, products, extraLink }) => {
	return (
		<Box mt={12}>
			<Container maxWidth="container.xl">
				<Heading
					as={motion.h2}
					initial={{ opacity: 0, transition: { duration: 1 } }}
					whileInView={{ opacity: 1 }}
					textAlign="center"
					mb={5}>
					{title}
				</Heading>
				<Grid
					gap={4}
					templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</Grid>
				{extraLink && (
					<Flex justify="center" mt={3}>
						<NextLink href={extraLink}>
							<Button
								bg="blackAlpha.800"
								color="white"
								_hover={{ bg: "blackAlpha.700" }}
								rounded="none"
								px={8}>
								See More
							</Button>
						</NextLink>
					</Flex>
				)}
			</Container>
		</Box>
	);
};

export default ProductsSection;
