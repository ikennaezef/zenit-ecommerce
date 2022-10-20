import React from "react";
import { Banner, BestSellers, Categories, ProductCard } from "../components";
import { sanityClient } from "../lib/sanity";

export default function Home({ products }) {
	console.log(products);
	return (
		<div>
			<Banner />
			<Categories />
			<BestSellers products={products} />
			<div>Hello guys</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == 'product']{
		_id,
		'category': categories[0] -> title,
		'vendor': vendor -> title,
		title,
		price,
		image
	}`;

	const products = await sanityClient.fetch(query);

	return {
		props: { products },
	};
};
