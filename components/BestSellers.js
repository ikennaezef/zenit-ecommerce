import React from "react";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const BestSellers = ({ products }) => {
	return (
		<Box mt={12}>
			<Container maxWidth="container.lg">
				<Heading textAlign="center" mb={5}>
					Best Sellers
				</Heading>
				<Grid
					gap={4}
					templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default BestSellers;
