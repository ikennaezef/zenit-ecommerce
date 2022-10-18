import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Banner, NavBar } from "../components";

export default function Home() {
	return (
		<div>
			<NavBar />
			<Banner />
			<div>Hello guys</div>
		</div>
	);
}
