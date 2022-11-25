import React from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { Meta, StoreCard } from "../components";
import { BiRightArrowAlt } from "react-icons/bi";

const offices = [
	{
		location: "NEW YORK",
		image: "/images/new-york.jpg",
		mail: "mail@newyorkzenitstores.com",
		phone: "+1 456 7890",
	},
	{
		location: "WASHINGTON D.C.",
		image: "/images/washington-dc.jpg",
		mail: "mail@dczenitstores.com",
		phone: "+1 458 2290",
	},
	{
		location: "PARIS",
		image: "/images/paris.jpg",
		mail: "mail@pariszenitstores.com",
		phone: "+33 456 7890",
	},
	{
		location: "LONDON",
		image: "/images/london.jpg",
		mail: "mail@londonzenitstores.com",
		phone: "+44 486 7890",
	},
];

const contact = () => {
	return (
		<Box>
			<Meta title="Contact Us" />
			<Box
				position="relative"
				color="white"
				py="6rem"
				bgImage={"/images/contact.jpg"}
				bgPosition="center"
				bgSize="cover"
				_before={{
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 20,
					width: "full",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.6)",
				}}>
				<Container maxWidth="container.md">
					<Box position="relative" zIndex={30} textAlign="center">
						<Heading fontSize="3rem">Contact Us</Heading>
					</Box>
				</Container>
			</Box>
			<Container mt={8} maxWidth="container.xl">
				<Flex
					direction={{ base: "column", md: "row" }}
					gap={{ base: 10, md: 5 }}
					mb={8}>
					<Box w={{ base: "full", md: "30%" }}>
						<Box>
							<Heading fontSize="1.5rem">Headquarters</Heading>
							<Text>1600 Ampitheatre Parkway</Text>
							<Text>New York WC1 1BA</Text>
						</Box>
						<Box mt={5}>
							<Heading fontSize="1.5rem">Phone Number</Heading>
							<Text>1-800-456-789</Text>
							<Text>1-800-456-789</Text>
						</Box>
						<Box mt={5}>
							<Heading fontSize="1.5rem">Support</Heading>
							<Text>support@zenitstores.com</Text>
						</Box>
					</Box>
					<Box>
						<Box>
							<Heading>Let's Connect</Heading>
							<Text mb={5}>
								Your email address will not be published. Required fields are
								marked *
							</Text>
							<Textarea rows={8} placeholder="Comment*" />
							<Flex gap={2} direction={{ base: "column", md: "row" }} mt={4}>
								<Input placeholder="Name*" />
								<Input placeholder="Email*" type="email" />
							</Flex>
							<Button
								mt={6}
								rounded="sm"
								bgColor="blackAlpha.900"
								color="white"
								_hover={{ opacity: 0.8 }}
								px={5}
								rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
								SUBMIT
							</Button>
						</Box>
					</Box>
				</Flex>
				<Box>
					<Heading textAlign="center" mb={4}>
						Our Stores
					</Heading>
					<Grid
						maxWidth="full"
						gap={5}
						templateColumns={{ base: "1fr, 1fr", md: "repeat(4, 1fr)" }}>
						{offices.map((office, index) => (
							<StoreCard key={index} office={office} />
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default contact;
