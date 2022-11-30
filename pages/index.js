import React from "react";
import {
	Banner,
	ProductsSection,
	Categories,
	SalesBanner,
	SmallBanners,
} from "../components";
import { sanityClient } from "../lib/sanity";

export default function Home({ products }) {
	return (
		<div>
			<Banner />
			<Categories />
			<ProductsSection title="Best Sellers" products={products.slice(1, 7)} />
			<SmallBanners />
			<ProductsSection title="Our Featured" products={products.slice(7, 13)} />
			<SalesBanner />
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == 'product']{
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

	const products = await sanityClient.fetch(query);

	return {
		props: { products },
	};
};
