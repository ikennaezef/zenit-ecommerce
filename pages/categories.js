import { Box } from "@chakra-ui/react";
import React from "react";
import { ProductsSection } from "../components";
import { sanityClient } from "../lib/sanity";

const CategoriesPage = ({
	fashionProducts,
	homeProducts,
	accessoriesProducts,
	electronicsProducts,
}) => {
	return (
		<Box py={8}>
			<ProductsSection
				title="Fashion"
				products={fashionProducts}
				extraLink="/category/fashion"
			/>
			<ProductsSection
				title="Home"
				products={homeProducts}
				extraLink="/category/home"
			/>
			<ProductsSection
				title="Accessories"
				products={accessoriesProducts}
				extraLink="/category/accessories"
			/>
			<ProductsSection
				title="Electronics"
				products={electronicsProducts}
				extraLink="/category/electronics"
			/>
		</Box>
	);
};

export default CategoriesPage;

export const getServerSideProps = async () => {
	const fashionQuery = `*[_type == 'product' && 'Fashion' in categories[]->title][0...6]{
		_id,
		'category': categories[0] -> title,
		'vendor': vendor -> title,
		slug,
		title,
		price,
		image,
		onSale,
		oldPrice
	}`;

	const homeQuery = `*[_type == 'product' && 'Home' in categories[]->title][0...6]{
		_id,
		'category': categories[0] -> title,
		'vendor': vendor -> title,
		slug,
		title,
		price,
		image,
		onSale,
		oldPrice
	}`;

	const accessoriesQuery = `*[_type == 'product' && 'Accessories' in categories[]->title][0...6]{
		_id,
		'category': categories[0] -> title,
		'vendor': vendor -> title,
		slug,
		title,
		price,
		image,
		onSale,
		oldPrice
	}`;

	const electronicsQuery = `*[_type == 'product' && 'Electronics' in categories[]->title][0...6]{
		_id,
		'category': categories[0] -> title,
		'vendor': vendor -> title,
		slug,
		title,
		price,
		image,
		onSale,
		oldPrice
	}`;

	const fashionProducts = await sanityClient.fetch(fashionQuery);
	const homeProducts = await sanityClient.fetch(homeQuery);
	const accessoriesProducts = await sanityClient.fetch(accessoriesQuery);
	const electronicsProducts = await sanityClient.fetch(electronicsQuery);

	return {
		props: {
			fashionProducts,
			homeProducts,
			accessoriesProducts,
			electronicsProducts,
		},
	};
};
