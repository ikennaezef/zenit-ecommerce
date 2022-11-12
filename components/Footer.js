import React from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Image,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import { GiMountaintop } from "react-icons/gi";
import { BiBluetooth, BiRightArrowAlt } from "react-icons/bi";

const Footer = () => {
	return (
		<footer style={{ marginTop: "2rem" }}>
			<Box bgColor="blackAlpha.800" py={12} color="gray.100">
				<Container maxWidth="container.xl">
					<Flex
						gap={5}
						justify="space-between"
						direction={{ base: "column", md: "row" }}>
						<Box>
							<NextLink href="/">
								<Flex align="center" gap="0.2rem">
									<GiMountaintop color="#4299E1" fontSize="1.7rem" />
									<Heading fontWeight={700} color="white" fontSize="2rem">
										ZENIT
									</Heading>
								</Flex>
							</NextLink>
						</Box>
						<Box>
							<Heading fontSize="1.6rem">Subscribe to our Newsletter</Heading>
							<Text color="gray.200">
								Get all the latest information, Sales and Offers
							</Text>
						</Box>
						<Flex gap={2}>
							<Input
								placeholder="Email address here..."
								_placeholder={{ color: "whiteAlpha.400" }}
								bgColor="whiteAlpha.200"
								border="none"
								rounded="sm"
							/>
							<Button
								rounded="sm"
								bgColor="blue.600"
								px={8}
								rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
								SUBSCRIBE
							</Button>
						</Flex>
					</Flex>
				</Container>
				<Divider my={8} h="1px" />
				<Container maxWidth="container.xl">
					<Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={3}>
						<Box>
							<Heading mb={4} fontWeight="600" fontSize="1.4rem">
								Contact Info
							</Heading>
							<Text mb={2} fontWeight="400" color="whiteAlpha.600">
								<span style={{ color: "#e1e1e1", fontWeight: "500" }}>
									PHONE:{" "}
								</span>
								+234 8037452718
							</Text>
							<Text mb={2} color="whiteAlpha.600">
								<span style={{ color: "#e1e1e1", fontWeight: "500" }}>
									EMAIL:{" "}
								</span>
								zenitstores@gmail.com
							</Text>
							<Text mb={2} color="whiteAlpha.600">
								<span style={{ color: "#e1e1e1", fontWeight: "500" }}>
									ADDRESS:{" "}
								</span>
								123 Street, London, England
							</Text>
							<Text mb={2}>
								<span style={{ color: "#e1e1e1", fontWeight: "500" }}>
									WORKING DAYS/HOURS:
								</span>
							</Text>
							<Text color="whiteAlpha.600">Mon - Sat/ 9:00AM - 8:00PM</Text>
						</Box>
						<Box>
							<Heading mb={4} fontWeight="600" fontSize="1.4rem">
								Contact Info
							</Heading>
							<Flex direction="column">
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									About Us
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Help
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Returns
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Customer Service
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Terms & Conditions
								</Link>
							</Flex>
						</Box>
						<Box>
							<Heading mb={4} fontWeight="600" fontSize="1.4rem">
								My Account
							</Heading>
							<Flex direction="column">
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Sign In
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Order History
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									View Cart
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									My Wishlist
								</Link>
								<Link
									color="whiteAlpha.600"
									mb={2}
									_hover={{ color: "blue.600" }}>
									Track My Order
								</Link>
							</Flex>
						</Box>
						<Box>
							<Text color="whiteAlpha.600">
								Dolor sit ipsum sed labore kasd sea ipsum stet. Labore ipsum
							</Text>
							<Text color="whiteAlpha.600">
								Nonumy diam rebum elitr, dolor ea at clita lorem, nonumy vero
								dolor elitr et et accusam, ipsum diam eirmod kasd sea ipsum
							</Text>
						</Box>
					</Grid>
				</Container>
				<Divider my={8} h="1px" />
				<Container maxWidth="container.xl">
					<Flex
						direction={{ base: "column", md: "row" }}
						gap={4}
						align="center"
						justify="space-between">
						<Box>
							<Text color="whiteAlpha.700">
								&copy; {new Date().getFullYear()} Zenit Stores
							</Text>
						</Box>
						<Flex align="center" gap={3}>
							<Image src="/images/amex.svg" alt="American Express" w="2.5rem" />
							<Image src="/images/apple-pay.svg" alt="Apple Pay" w="2.5rem" />
							<Image src="/images/google-pay.svg" alt="Google Pay" w="2.5rem" />
							<Image src="/images/maestro.svg" alt="Maestro" w="2.5rem" />
							<Image src="/images/mastercard.svg" alt="Mastercard" w="2.5rem" />
							<Image src="/images/shopify-pay.svg" alt="Shop Pay" w="2.5rem" />
							<Image src="/images/visa.svg" alt="Visa" w="2.5rem" />
						</Flex>
					</Flex>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
