import React from "react";
import Nextlink from "next/link";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp, appear } from "../utils/MotionVariants";
import { BiRightArrowAlt } from "react-icons/bi";

const About = () => {
	return (
		<Box>
			<Box
				position="relative"
				color="white"
				py="5rem"
				bgImage={"/images/lights.jpg"}
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
					backgroundColor: "rgba(31, 114, 201, 0.7)",
				}}>
				<Container maxWidth="container.md">
					<Box position="relative" zIndex={30} textAlign="center">
						<Heading fontSize="3rem">Our Services</Heading>
						<Text fontSize="1.2rem">
							About Zenit Stores and the wonderful services we offer.
						</Text>
					</Box>
				</Container>
			</Box>
			<Box py={6}>
				<Container maxWidth="container.xl">
					<Flex
						direction={{ base: "column", md: "row" }}
						gap={6}
						align="center">
						<Box>
							<Image src="/images/customer.jpg" />
						</Box>
						<Box>
							<Heading>We Provide Quality and Fashionable Products</Heading>
							<Text mt={3}>
								Stet ipsum et tempor aliquyam labore dolores stet invidunt sit.
								At kasd erat erat labore amet et elitr diam, et amet no sea
								aliquyam diam lorem kasd gubergren. Takimata et aliquyam clita
								aliquyam. Clita at amet lorem diam tempor consetetur.
							</Text>
							<Nextlink href="/categories">
								<Button
									mt={5}
									variant="link"
									color="black"
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									VISIT OUR STORE
								</Button>
							</Nextlink>
						</Box>
					</Flex>
					<Flex
						gap={6}
						mt={12}
						align="center"
						direction={{ base: "column", md: "row-reverse" }}
						as={motion.div}
						variants={fadeInUp}
						initial={"initial"}
						whileInView={"animate"}
						viewport={{ once: true }}>
						<Box>
							<Image src="/images/support.jpg" />
						</Box>
						<Box>
							<Heading>Expect Restless and Amazing Support</Heading>
							<Text mt={3}>
								Stet ipsum et tempor aliquyam labore dolores stet invidunt sit.
								At kasd erat erat labore amet et elitr diam, et amet no sea
								aliquyam diam lorem kasd gubergren. Takimata et aliquyam clita
								aliquyam. Clita at amet lorem diam tempor consetetur.
							</Text>
							<Nextlink href="/contact">
								<Button
									mt={5}
									variant="link"
									color="black"
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									CONTACT US
								</Button>
							</Nextlink>
						</Box>
					</Flex>
					<Flex
						direction={{ base: "column", md: "row" }}
						gap={6}
						mt={12}
						align="center"
						as={motion.div}
						variants={fadeInUp}
						initial={"initial"}
						whileInView={"animate"}
						viewport={{ once: true }}>
						<Box>
							<Image src="/images/transaction.jpg" />
						</Box>
						<Box>
							<Heading>Easy Checkout Process</Heading>
							<Text mt={3}>
								Our checkout process is easy and smooth. Complete your order
								with no hassles. At kasd erat erat labore amet et elitr diam, et
								amet no sea aliquyam diam lorem kasd gubergren. Takimata et
								aliquyam clita aliquyam. Clita at amet lorem diam tempor
								consetetur.
							</Text>
							<Nextlink href="/categories">
								<Button
									mt={5}
									variant="link"
									color="black"
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									VISIT OUR STORE
								</Button>
							</Nextlink>
						</Box>
					</Flex>
					<Box pt={16}>
						<Heading textAlign="center">Meet Our Team</Heading>
						<Box mt={4}>
							<Flex flexWrap="wrap" align="center" justify="center" gap={4}>
								<Box
									textAlign="center"
									as={motion.div}
									variants={appear}
									initial={"initial"}
									whileInView={"animate"}>
									<Box height="18rem" overflow="hidden" mb={4} w="18rem">
										<Image src="/images/alex.jpg" w="full" />
									</Box>
									<Text fontSize="1.2rem" fontWeight="600">
										ALEXANDER HIPP
									</Text>
									<Text>CEO</Text>
								</Box>
								<Box
									textAlign="center"
									as={motion.div}
									variants={appear}
									initial={"initial"}
									whileInView={"animate"}>
									<Box height="18rem" overflow="hidden" mb={4} w="18rem">
										<Image src="/images/derick.jpg" maxWidth="full" />
									</Box>
									<Text fontSize="1.2rem" fontWeight="600">
										DERICK MCKINNEY
									</Text>
									<Text>Logistics</Text>
								</Box>
								<Box
									textAlign="center"
									as={motion.div}
									variants={appear}
									initial={"initial"}
									whileInView={"animate"}>
									<Flex
										align="center"
										height="18rem"
										w="18rem"
										overflow="hidden"
										mb={4}>
										<Image src="/images/jorik.jpg" w="full" objectFit="cover" />
									</Flex>
									<Text fontSize="1.2rem" fontWeight="600">
										JORIK KLEEN
									</Text>
									<Text>Developer</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default About;
