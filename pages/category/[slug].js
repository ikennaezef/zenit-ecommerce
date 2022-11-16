import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { sanityClient } from "../../lib/sanity";
import { ProductsSection } from "../../components";

const Category = ({ category, products }) => {
	console.log(products);
	return (
		<Box>
			<Container maxWidth="container.xl">
				<Box textAlign="center">
					<Heading>{category.title}</Heading>
					<Text color="blackAlpha.700">{category.description}</Text>
				</Box>
				<ProductsSection products={products} />
			</Container>
		</Box>
	);
};

export default Category;

export const getStaticProps = async ({ params: { slug } }) => {
	const productsQuery = `*[_type=="product" && '${slug}' in categories[]->slug.current ]{
    categories,
    description,
    slug,
    image,
    price,
    oldPrice,
    title,
    'vendor': vendor -> title,
    _id
  }`;

	const categoryQuery = `*[_type=="category" && slug.current == '${slug}'][0]{
    title,
    description,
    _id
  }`;
	const products = await sanityClient.fetch(productsQuery);
	const category = await sanityClient.fetch(categoryQuery);

	return {
		props: { category, products },
	};
};

export const getStaticPaths = async () => {
	const query = `*[_type=="product"]{
    slug {
      current
    }
  }`;

	const products = await sanityClient.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};
