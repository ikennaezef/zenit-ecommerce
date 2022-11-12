import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";

const categoriesData = [
	{
		title: "Fashion",
		image: "/fashion.jpg",
	},
	{
		title: "Accessories",
		image: "/accessories.jpg",
	},
	{
		title: "Electronics",
		image: "/electronics.jpg",
	},
	{
		title: "Home",
		image: "/home.jpg",
	},
];

const Categories = () => {
	return (
		<Box pt={12}>
			<Container maxW="container.xl">
				<Heading mb={4} textAlign="center">
					Our Categories
				</Heading>
				<Grid
					gap={4}
					templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
					{categoriesData.map((category) => (
						<CategoryCard key={category.title} category={category} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Categories;
