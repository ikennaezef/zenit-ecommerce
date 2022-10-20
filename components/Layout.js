import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
