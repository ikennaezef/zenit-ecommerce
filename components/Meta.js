import React from "react";
import Head from "next/head";

const Meta = ({ title, description }) => {
	return (
		<Head>
			<meta name="description" content={description} />
			<title>{title}</title>

			<meta name="application-name" content="Zenit Stores" />
		</Head>
	);
};

export default Meta;

Meta.defaultProps = {
	title: "Zenit Stores",
	description:
		"Zenit Stores is your one stop ecommerce choice for elctronics, home accessories, fashion apparel and much more.",
};
