import React from "react";
import Head from "next/head";

const Meta = ({ title, description }) => {
	return (
		<Head>
			<meta name="description" content={description} />
			<title>{title}</title>

			<meta name="application-name" content="Zenit Stores" />

			<link rel="manifest" href="/site.webmanifest" />

			<link rel="shortcut icon" href="/favicon.ico" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link rel="mask-icon" href="/favicon-16x16.png" color="grey"></link>
		</Head>
	);
};

export default Meta;

Meta.defaultProps = {
	title: "Zenit Stores",
	description:
		"Zenit Stores is your one stop ecommerce choice for electronics, home accessories, fashion apparel and much more.",
};
